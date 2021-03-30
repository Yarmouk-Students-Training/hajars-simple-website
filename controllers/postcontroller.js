//const post =require('../models/post');
const { post } = require('.././models');

const create_post = async(req,res)=>{
    const{postid,userid,postcontent}=req.body;
    try{
       const newpost= await post.create({postid,userid,postcontent})
       return res.json(newpost)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  }

const get_specific_post = async(req,res) => {
   
    try{
        const postid= req.params.postid
        const spost= await post.findOne({where:{postid}})
        return res.json(spost)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const update_post_content = async(req, res) => {
    const postid= req.params.postid
    const{postcontent}=req.body
    try{
        const postt= await post.findOne({where:{postid}})
        postt.postcontent=postcontent
        await postt.save() 
        return res.json(postt) 
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  } 

  const delete_post = async(req, res) => {
    const postid= req.params.postid
    try {
        const postt = await post.findOne({ where: { postid } })
        await postt.destroy()
        return res.json({ message: 'deleted!' })
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
  } 

  module.exports = {
    create_post,
    get_specific_post ,
    update_post_content,
    delete_post
  } 