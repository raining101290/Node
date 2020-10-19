const router = require('express').Router();

router.post('/register', (req,res) => {
    res.send('You are in Register');
});

router.post('/login', (req,res) => {
    res.send('You are in Login');
});


module.exports = router;