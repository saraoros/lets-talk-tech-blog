const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET /api/dashboard/posts
router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "body_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },

      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/dashboard/posts/:id
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "body_content", "created_at"],

    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },

      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res
          .status(404)
          .json({ message: "Sorry! No post was found with this id" });
        return;
      }
      const post = dbPostData.get({ plain: true });

      res.render("edit-post", {
        post,
        loggedIn: true,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/new", (req, res) => {
  res.render("add-post", {
    loggedIn: true,
  });
});

module.exports = router;
