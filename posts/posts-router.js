const express = require('express');

const Posts = require('./posts-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {

    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'The posts information could not be retieved.'
        })
    }
})


module.exports = router;