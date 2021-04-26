const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/db_conn');

app.use(express.json());
// We link out router files here to make our route easy
app.use(require('./router/auth'));

// PORT
const PORT = process.env.PORT;
// const User = require('./model/userSchema');

// MiddleWares
const middleWare = (req, res, next) => {
    // TODO: Auth part
    console.log("Hello from MiddleWare");
    next();
}

// API Routes
// app.get('/', (req, res) => {
//     res.send("Welcome TO HOME from server app.js!!!");
// });

app.get('/about', middleWare, (req, res) => {
    res.send("Welcome to About page!!!");
});

app.get('/contact', (req, res) => {
    res.send("Welcome to Contact page!!!");
});

app.get('/signin', (req, res) => {
    res.send("Welcome to Signin page!!!");
});

app.get('/signup', (req, res) => {
    res.send("Welcome to Signup page!!!");
});


// Listening
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})