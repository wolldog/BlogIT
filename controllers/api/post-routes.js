const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");


// CREATE post
router.post("/", withAuth, async (req, res) => {


    try {

      const newPostData = await Post.create({
        comment_text: req.body.comment,
        user_id: req.session.currentUser,
        post_id: req.body.postId

      });
  
      res.status(200).json(newPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //Get one post to edit

 
  router.get("/post/myPost:id", async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id)
  
      const myPostData = dbPostData.get({ plain: true });
  
     
      console.log(JSON.stringify(myPostData))
  
      res.render("editPost", {
        myPostData,
        loggedIn: req.session.loggedIn,
      });
    
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router