const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

const PostSchema = new mongoose.Schema({
  content: String
});

const Post = mongoose.model('Post', PostSchema);

app.post('/posts', async (req, res) => {
  const newPost = new Post({ content: req.body.content });
  await newPost.save();
  res.status(201).send(newPost);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
