const express = require('express');
const posts = express.Router();
const postsController = require('../controllers/postsCtl');

api.get("/allposts",postsController.getAllPosts);
api.get("/single/:id",postsController.getSinglePost);
api.post('/newpost',postsController.newPost);
api.delete('/delpost/:id',postsController.delPost);


module.exports = posts;
