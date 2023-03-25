const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// Import the custom middleware
// const withAuth = require("../utils/auth");


// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post

router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"]},
        { model: Comment, where: {post_id: req.params.id}, include: [{ model: User, attributes: ["username"] }], required: false}
      ]
    });

    const postData = dbPostData.get({ plain: true });

    const commentData = dbPostData.comments.map((comment) => comment.get({ plain: true }));

  

    
    // console.log(JSON.stringify(postData))

    res.render("onePost", { 
      postData,
      commentData, 
      loggedIn: req.session.loggedIn });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Signup route
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Login route
router.get("/dashboard", (req, res) => {
 
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
  }
  );
});



module.exports = router;
