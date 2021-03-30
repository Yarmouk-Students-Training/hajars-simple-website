const express=require('express');
const reactioncontroller = require('../controllers/reactioncontroller');
const Router=express.Router();
//reactionroutes
Router.post('/', reactioncontroller.create_reaction);
Router.get('/:postid', reactioncontroller.get_all_reaction);
Router.put('/:postid/:reactionid', reactioncontroller.update_specific_reaction);
Router.delete('/:reactionid', reactioncontroller.delete_reaction);

module.exports = Router ;