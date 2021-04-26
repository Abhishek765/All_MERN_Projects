const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
require('../db/db_conn');

const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send("Welcome TO HOME from auth.js!!!");
});
// ! Using Promises
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
//     //    validation
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: 'Please fill the Fields properly' });
//     }

//     //  checking user already exists
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: 'User already exists' });

//             }
//             // Create new user if not exists
//             const user = new User({ name, email, phone, work, password, cpassword });
//             user.save()
//                 .then(() => {
//                     res.status(201).json({ message: "User registered successfully" });
//                 })
//                 .catch((error) => res.status(500).json({ error: error }));
//         })
//         .catch((error) => console.log(`error: `, error));




// });
// ! Registration Route
// ! Using Async-Await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    //    validation
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'Please fill the Fields properly' });
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: 'Email already exists' });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: 'Password are not matching' });

        }
        else {
            // Create new user if not exists
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User registered successfully" });
        }

    } catch (error) {
        console.log(error)
    }
});

// ! Login Route

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        // validation 
        if (!email || !password) {
            return res.status(422).json({ message: "Please fill the Fields" });
        }


        const loginUser = await User.findOne({ email: email });


        if (loginUser) {
            // comparing user entered password with DB stored hash password
            const isMatch = await bcrypt.compare(password, loginUser.password);

            //* JWT Token
            token = await loginUser.generateAuthToken();
            console.log(`token: ${token}`);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            }
            else {

                res.status(200).json({ message: "Login successful" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;