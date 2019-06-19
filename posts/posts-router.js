const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'The posts information could not be retrieved.',
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
    const post = await Posts.findById(req.params.id);

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({
            message: 'The post with the specified ID does not exist.',
        })
    }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'The post information could not be retrieved.',
        });
    }
});


module.exports = router;