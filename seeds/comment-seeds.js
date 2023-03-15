const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I really like this",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I am not happy about this",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "It's really hot right now",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I can't believe I am reading this",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Wow!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Hello?",
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
