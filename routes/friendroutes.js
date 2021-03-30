const express=require('express');
const friendcontroller = require('../controllers/friendcontroller');
//const {verifytok}=require ('../verifytok.js');
const Router=express.Router();

//router.use(express.json());
Router.post('/' ,friendcontroller.create_friend);
Router.get('/:userid', friendcontroller.get_all_friends);

module.exports = Router;