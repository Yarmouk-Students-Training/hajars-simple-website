const express=require('express');
const commentcontroller = require('../controllers/commentcontroller');
const Router=express.Router();

//commentroutes
Router.post('/', commentcontroller.create_comment);
Router.get('/:postid', commentcontroller.get_all_comments);
Router.get('/:postid/:commentid', commentcontroller.get_specific_comment);
Router.put('/:postid/:commentid', commentcontroller.update_specific_comment_content);
Router.delete('/:commentid', commentcontroller.delete_comment);

module.exports = Router ;