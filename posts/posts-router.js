const express = require('express');

const Posts = require('../data/db');

const router = express.Router();

//=========== GET ==================

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

router.get('/:id/comments', async (req, res) => {
    try {
        const postId = await Posts.findCommentById(req.params.id)
        res.status(200).json(postId)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'The comments information could not be retrieved.',
        });
    }
});

//========== POST ================

router.post('/', async (req, res) => {
    try {
        const post = await Posts.insert(req.params.post);
        res.status(201).json(post)
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'There was an error while saving the post to the database',
        });
    }
});

router.post('/:id/comments', async (req, res) => {
    try {
        const postId = await Posts.findCommentById(req.params.id)
        res.status(201).json(postId)
    } catch(error) {
        console.log(error);
        res.status(404).json({
            message: 'The post with the specified ID does not exist.',
        });
    }
});

//========== DELETE =================

router.delete('/:id', async (req, res) => {
    try {
    const posts = await Posts.remove(req.params.id);

    if (posts) {
        res.status(200).json(posts);
    } else {
        res.status(404).json({
            message: 'The post with the specified ID does not exist.',
        })
    }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'The post could not be removed.',
        });
    }
});

//=========== PUT ===============

router.put('/:id', async (req, res) => {
    try {
    const post = await Posts.update(req.params.id, req.params.post);

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