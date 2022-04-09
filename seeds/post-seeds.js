const { Post } = require("../models");

const postdata = [
  {
    body_content: "Have you Learned to Code?",
    user_id: 1,
  },
  {
    body_content: "I am learning to code",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
