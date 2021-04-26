const mongoose = require('mongoose');

const DB = process.env.DB_URI;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection Successfully established`);
}).catch(err => {
    console.log(`error occured ${err} No Connection`);
})