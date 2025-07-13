const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  projectLink: {
    type: String,
    required: true,
    trim: true,
  },
  projectTechStack: {
    type: [String], 
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
}, {
  timestamps: true, 
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
