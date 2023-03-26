const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE comment
router.post("/", withAuth, async (req, res) => {


  try {
    const newCommentData = await Comment.create({
      comment_text: req.body.comment,
      user_id: req.session.currentUser,
      post_id: req.body.postId
    });
    res.status(200).json(newCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router