const express = require('express')
const router = express.Router()
const { postImages } = require("../models")

const {validateToken} = require("../middlewares/Authentication")
const {upload, getImage } = require("../services/S3Manager")

router.post('/upload/:postId', [validateToken, upload.single("file") ], async (req, res) => {
    const {file} = req;

    const {postId} = req.params


    console.log("File", file, postId)

    // create
    let imagePost = await postImages.create({
        originalName: file.originalname,
        size: file.size,
        key: file.key,
        postId: postId   
    })


    return res.json(imagePost)
})

router.post('/postImage', validateToken, async (req, res) => {
    const { key } = req.body;

    return await getImage(key, res);
})

module.exports = router;