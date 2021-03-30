//const Userr =require('../models/reaction');
const { reaction } = require('.././models');
const create_reaction = async(req,res)=>{
    const {reactionid,postid,userid,reacttype}=req.body
    try{
       const Reaction= await reaction.create({reactionid,postid,userid,reacttype})
       return res.json(Reaction)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  }

const get_all_reaction = async(req, res) => {
    //const reactionid= req.params.reactionid
    const postid= req.params.postid
    try{
        const Reaction= await reaction.findAll({where:{postid}})
        return res.json(Reaction)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

const update_specific_reaction = async(req, res) => {
    const postid= req.params.postid
    const reactionid= req.params.reactionid
    const{reacttype}=req.body
    try{
        const Reaction= await reaction.findOne({where:{postid,reactionid}})
         Reaction.reacttype=reacttype
         await Reaction.save() 
         return res.json(Reaction) 
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const delete_reaction = async(req, res) => {
    const reactionid= req.params.reactionid
    try {
        const Reactionn = await reaction.findOne({ where: { reactionid } })
        await Reactionn.destroy()
        return res.json({ message: ' reaction deleted!' })
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
  }

  module.exports = {
    create_reaction,
    get_all_reaction,
    update_specific_reaction,
     delete_reaction
  } 