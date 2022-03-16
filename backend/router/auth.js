const express = require('express');
const router = express.Router();





router.get('/', (req, res) => {
    res.send('Router')
})
router.get('/about', (req, res) => {
    res.send('Hello World!')
})
router.get('/hey', (req, res) => {
    res.send('Hello World!')
});

module.exports = router;
