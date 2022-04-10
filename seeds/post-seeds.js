const { Post } = require("../models");

const postdata = [
  {
    user_id: 1,
    title: "Tech is The Best",
    body_content:
      "How long have you been in tech for? Are you trying to break into tech? Here's my story.",
  },
  {
    user_id: 2,
    title: "There's More to Tech Than Just Coding",
    body_content:
      "Have you explored the other tech jobs available? Here's some code-less tech opportunities!",
  },
  {
    user_id: 3,
    title: "Learning to Code? Where Do You Begin?",
    body_content:
      "Look into boot camps, free online courses, and some great books! Boot camps are a great way to keep you focus on the end goal!",
  },
  {
    user_id: 4,
    title: "Real Tech Talk: Your Background MATTERS",
    body_content:
      "You can still make it into tech! Many struggl with imposter syndrome thinking that they won't be able to make it into tech unless they have a computer science degree. It's hard breaking into tech, but it's not impossible!",
  },
  {
    user_id: 5,
    title: "Some Inspiration For Today:",
    body_content: "You didn't come this far to ONLY come this far.",
  },
  {
    user_id: 6,
    title: "Learn to DeBug",
    body_content:
      "A huge part of a developers role is to debug! Debugging is something that becomes a skill over time.",
  },
  {
    user_id: 7,
    title: "Is Networking Important?",
    body_content:
      "Sorry to break it to you, but YES. Networking is so important, especially for young web devs! Don't be afraid to throw yourself out there and meet people in the industry.",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
