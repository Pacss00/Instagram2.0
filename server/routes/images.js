const express = require('express')
const router = express.Router()

const {validateToken} = require("../middlewares/Authentication")
const {upload} = require("../services/S3Manager")

router.post('/upload', [validateToken, upload.single("file") ], async (req, res) => {
    const {file} = req;

    console.log("File", file)
})

module.exports = router;