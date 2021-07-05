const express = require('express');

const server = express();
const cors = require('cors');
const postsRouter = require('./posts/posts-router');

server.use(express.json());
server.use(cors());
server.use('/posts', postsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Sanity == Good </h2>');
});

module.exports = server;