const express = require('express');
const router = express.Router();

require("../server.js");
const User = require('../models/userSchema');



router.get('/', (req, res) => {
    res.send('Router')
})
router.get('/about', (req, res) => {
    res.send('Hello World!')
})
router.get('/hey', (req, res) => {
    res.send('Hello World!')
});


router.post('/register', (req, res) => {
    const { name, id, surname, middlename, address, password, gender } = req.body;

    if (!name || !id || !surname || !middlename || !address || !password || !gender) {
        return res.status(422).json({ error: "Fill all the details " });

    }
    User.findOne({ id: id }).then((userExists) => {
        if (userExists) {
            return res.status(422).json({ error: "Voter Id Already Registered " });
        }

        const user = new User({ name, id, surname, middlename, address, password, gender });

        user.save().then(() => {
            res.status(201).json({ message: "Registration Sucessfull" });

        })
            .catch((err) => {
                res.status(500).json({ err })
            });
    }).catch(err => { console.log(err); });


})

module.exports = router;
