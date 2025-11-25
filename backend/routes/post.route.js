const express = require('express');
const route = express.Router();
const Post = require('../models/post.model');

route.get('/', (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
});

route.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
});

route.post('/', (req, res) => {
  const post = new Post({ ...req.body });
  post
    .save()
    .then(() => res.status(201).json({ message: 'Post enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
});


module.exports = route;
