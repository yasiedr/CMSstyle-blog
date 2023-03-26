const express = require('express');
const router = express.Router();
const { Post,Comment,User } = require('../models');
// GET route for homepage
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    console.log(postData) 
    res.render('homepage', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;