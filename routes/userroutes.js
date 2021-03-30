const express=require('express');
const usercontroller = require('../controllers/usercontroller');
const Router=express.Router();
//router.use(express.json());

//userroutes
Router.post('/', usercontroller.create_user);
Router.get('/', usercontroller.get_all_user);
Router.get('/:userid', usercontroller.get_specific_user);
Router.put('/', usercontroller.update_specific_user_info);
Router.delete('/:userid', usercontroller.delete_user);

module.exports=Router;