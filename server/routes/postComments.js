const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { postComments, users } = require("../models")

router.post("/", validateToken, async (req, res) => {
    const {title, comment, postId} = req.body
    console.log(title, comment, postId)
    let postCommented = await postComments.findOne({
        where: {
            userId: req.user.id,
            postId: postId
        }
    })

    let commentedPost;
        // create
        commentedPost = await postComments.create({
            title: title,
            comment: comment,
            userId: req.user.id,
            postId: postId,
            status: "active"   
        })

    return res.json(commentedPost)
})


router.get("/:postId", validateToken, async (req, res) => {
    const {postId} = req.params;

    
    let getComments = await postComments.findAll({
        where: {
           postId: postId, 
           status: "active"     
        },
        include: [{
            model: users,
            attributes: ["username"]
        }]
        
    })
    return res.json(getComments)
})

router.delete("/:id", validateToken, async (req, res) => {
    const {id} = req.params;

    try{
        await postComments.update(
            {
                status: "deleted"
            },
            {
                where: {
                    id: id
                }
            }
        )
    } catch(e) {
        return res.json({error: e})
    }

    return res.json({ message: "Deleted Comment"})

   
})

module.exports = router