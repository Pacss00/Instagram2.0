const express = require('express');
const bcrypt = require('bcrypt');
const { users } = require("../models");
const { isValidPassword, isValidEmail, isValidUsername } = require("../helpers/Validation");

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send(false);
})

router.post('/', async (request, response) => {
    const {email, password, username} = request.body;

    if (isValidEmail(email)) {
        const  result = isValidEmail(email);
        return response.json(result);
    }

    if (isValidPassword(password)) {
        const  result = isValidPassword(password);
        return response.json(result);
    }

    if (isValidUsername(username)) {
        const  result = isValidUsername(username);
        return response.json(result);
    }
    
    try {

        bcrypt.hash(password, 14).then(async (hash) => {
            try {
                await users.create({
                    email: email,
                    password: hash,
                    username: username,
                });
                return response.json({message: "User has been create"});
            } catch (e) {
                return response.json({error: e});
            }
        })
        
    } catch(e) {
        return response.json({error: e});
    }
})

module.exports = router;

