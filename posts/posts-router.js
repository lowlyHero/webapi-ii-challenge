const express = require('express');
const Posts = require('../data/db');

const router = express.Router();

//=========== GET ==================

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
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

//========= GET COMMENTS ==========

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
    if(!req.body.title || !req.body.contents) {
        res.status(400).json({
            message: 'Please provide title and contents for the post.'
        })
    } else {
        try {
            let newPost = {
                title: req.body.title,
                contents: req.body.contents
            };
            let createdPostId = await Posts.insert(newPost);
            let createdPost = await Posts.findById(createdPostId.id)
            res.status(201).json(createdPost);
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: 'There was an error while saving the post to the database.',
            });
        }
    }
});

router.post('/:id/comments', async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({
            message: 'Please provide text for the comment.'
        })
    } else {
        try {
            let newComment = {
                text: req.body.text
            };
            let createdCommentId = await Posts.insertComment(newComment);
            let createdComment = await Posts.findById(createdCommentId.id)
            res.status(201).json(createdComment);
        } catch(error) {
            console.log(error);
            res.status(404).json({
                message: 'The post with the specified ID does not exist.',
            });
        }
    }
});

//========== DELETE =================

router.delete('/:id', async (req, res) => {
    try {
    const posts = await Posts.remove(req.params.id);

    if (posts) {
        res.status(200).json({
            message: 'The post has been removed', 
            posts
        });
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
    if(!req.body.title || !req.body.contents) {
        res.status(400).json({
            message: 'Please provide title and contents for the post.'
        })
    } else {
        try {
            const post = await Posts.update(req.params.id, req.body);
        
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
                    message: 'The post information could not be modified.',
                });
            }
    }
});

module.exports = router;