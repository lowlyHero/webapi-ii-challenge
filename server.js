const express = require('express');

const server = express();
const postsRouter = require('./posts/posts-router');

server.use(express.json());
server.use('/posts', postsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Sanity Check</h2>');
});

module.exports = server;