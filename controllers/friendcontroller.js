//const friends =require('../models/friends');
const jwt=require('jsonwebtoken')
const { friends } = require('.././models');
//const {verifytoken}=require ('../verifytok');

const create_friend =async(req,res)=>{

    const{friendid,userid,requestaccept}=req.body
    try{
       const friend= await friends.create({friendid,userid,requestaccept})
       return res.json(friend)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  }


  const get_all_friends = async(req, res) => {
    const userid= req.params.userid
    try{
      const friend= await friends.findAll({where:{userid}})
      return res.json(friend)
       }
    catch(err){
          console.log(err)
          return res.status(500).json({error:'something went wrong'})
    
} }
  module.exports = {
    create_friend,
    get_all_friends 
  } 
