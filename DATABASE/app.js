const express =require ('express')
const {sequelize,User,Reaction,Post,Friend,Comments} =require('./models')
const app=express()
app.use(express.json())
app.post('/users',async(req,res)=>{
    const{userid,firstname,lastname,email,gender,dateofbirth, phonenumber}=req.body
    try{
       const user= await User.create({userid,firstname,lastname,email,gender,dateofbirth, phonenumber})
       return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
app.post('/reaction',async(req,res)=>{
    const{reactionid,postid,userid,reacttype}=req.body
    try{
       const reaction= await Reaction.create({reactionid,postid,userid,reacttype})
       return res.json(reaction)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.post('/post',async(req,res)=>{
    const{postid,usrtid,postcontent}=req.body
    try{
       const ppost= await Post.create({postid,usrtid,postcontent})
       return res.json(ppost)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
app.post('/friends',async(req,res)=>{
    const{friendid,userid,requestaccept}=req.body
    try{
       const friend= await Friend.create({friendid,userid,requestaccept})
       return res.json(friend)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.post('/comments',async(req,res)=>{
    const{commentid,userid,postid,reacttype}=req.body
    try{
       const comments= await Comments.create({commentid,userid,postid,reacttype})
       return res.json(comments)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
app.listen({port:5000},async()=>{
    console.log('server up on http://localhost:5000') 
    await sequelize.authenticate()
    console.log('database connected!')
})
  
