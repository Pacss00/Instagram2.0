const express = require("express")
const router = express.Router();
const {validateToken} = require("../middlewares/Authentication")
const { postLikes } = require("../models")

router.post("/", validateToken, async (req, res) => {
    const {like, postId} = req.body
    console.log("----", like, postId)
    let postLiked = await postLikes.findOne({
        where: {
            userId: req.user.id,
            postId: postId
        }
    })

    let likedPost;
    if(postLiked) {
        // update
        likedPost = await postLikes.update({
            like: like
        }, {
            where: {
                userId: req.user.id,
                postId: postId,
                id: postLiked.id
            }
        }
    
    )
    } else {
        // create
        likedPost = await postLikes.create({
            like: like,
            userId: req.user.id,
            postId: postId
        })
    }

    return res.json(likedPost)
})

module.exports = router