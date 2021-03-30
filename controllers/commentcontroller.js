//const comment =require('../models/comments');
const { comments } = require('.././models');
const create_comment = async(req,res)=>{
    const{commentid,userid,postid,commentcontent}=req.body
    try{
       const comment= await comments.create({commentid,userid,postid,commentcontent})
       return res.json(comment)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  }

  const get_all_comments = async(req, res) => {
    const postid= req.params.postid
    try{
        const comment= await comments.findAll({where:{postid}})
        return res.json(comment)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const get_specific_comment = async(req, res) => {
    const commentid= req.params.commentid
    const postid= req.params.postid
    try{
        const comment= await comments.findOne({where:{postid,commentid}})
        return res.json(comment)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const update_specific_comment_content = async(req, res) => {
    const postid= req.params.postid
    const commentid= req.params.commentid
    const{commentcontent}=req.body
    try{
        const commentt= await comments.findOne({where:{postid,commentid}})
        commentt.commentcontent=commentcontent
         await commentt.save() 
         return res.json(commentt) 
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }

  }

  const delete_comment = async(req, res) => {
    const commentid= req.params.commentid
    try {
        const comment = await comments.findOne({ where: { commentid } })
        await comment.destroy()
        return res.json({ message: 'comment deleted!' })
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
  }

  module.exports = {
    create_comment,
    get_all_comments,
    get_specific_comment ,
    update_specific_comment_content,
    delete_comment
  } 