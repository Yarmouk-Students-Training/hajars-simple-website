const express=require('express');
const postcontroller = require('../controllers/postcontroller');
const Router=express.Router();

//postroutes
Router.post('/', postcontroller.create_post);
Router.get('/:postid', postcontroller. get_specific_post);
Router.put('/:postid', postcontroller. update_post_content);
Router.delete('/:postid', postcontroller. delete_post);

module.exports=Router;