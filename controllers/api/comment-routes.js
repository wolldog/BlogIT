const router = require("express").Router();
const { Comment } = require("../../models");

// CREATE comment
router.post("/", async (req, res) => {


  try {
    const dbCommentData = await Comment.create({
      comment_text: req.body.comment,
      user_id: req.session.currentUser,
      post_id: req.body.postId
    });
    res.status(200).json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router