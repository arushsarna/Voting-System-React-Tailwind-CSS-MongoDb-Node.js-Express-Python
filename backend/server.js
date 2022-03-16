const mongoose = require('mongoose');
const express = require('express')
const app = express()
const DB = 'mongodb+srv://arushsarna:arush123@cluster0.dccju.mongodb.net/reg?retryWrites=true&w=majority';
mongoose.connect(DB
).then(() => {
    console.log('Connection Successfull');
}).catch((err) => {
    console.log(err);
});
const User = require('./models/userSchema');
const port = process.env.PORT || 9000

app.use(require('./router/auth'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World!')
})
app.get('/hey', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})