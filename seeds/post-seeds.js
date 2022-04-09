const { Post } = require("../models");

const postdata = [
  {
    body_content: "Have you Learned to Code?",
    user_id: 2,
  },
  {
    body_content: "I am learning to code",
    user_id: 3,
  },
  {
    body_content: "Donec posuere metus vitae ipsum.",
    user_id: 10,
  },
  {
    body_content: "Morbi non quam nec dui luctus rutrum.",
    user_id: 8,
  },
  {
    body_content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",

    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
