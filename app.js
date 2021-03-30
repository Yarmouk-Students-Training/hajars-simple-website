const express =require ('express')
const jwt=require('jsonwebtoken')
const morgan= require('morgan');
const { sequelize,user} = require('./models')
const models = require('./models')
const userroutes=require('./routes/userroutes.js');
const postroutes=require('./routes/postroutes.js');
const commentroutes=require('./routes/commentroutes.js');
const reactionroutes=require('./routes/reactionroutes.js');
const friendroutes=require('./routes/friendroutes.js');

const app=express()
app.use(express.json())


app.post('/api/posts',verifyToken,async(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            console.log(err);
            res.sendStatus(403);
        }else{  
           res.json({ message: 'post created..',authData})
        }
    })

})
app.post('/api/login',async(req,res)=>{
    try{const userid= req.params.userid
        const {email,password}=req.body;
        const uuser=await user.findOne({userid})
        if(uuser){
            jwt.sign({uuser},'secretkey',{expiresIn: '60s'},async(err,token)=>{
                //const userid=uuser.dataValues.userid
                //await authData.token.create({userid,token})
                console.log(req.body)
                return res.json({token});
            })
        }else{
            return res.status(403);
        }
    }catch(err){
        console.log(err);
        return res.status(500)
    }
 
     
 })
 
 //verify token
 function verifyToken(req,res,next){
     const bearerHeader= req.headers['authorization']
     if(typeof bearerHeader !== 'undefined'){
         const bearer=bearerHeader.split(' ');
         const bearerToken=bearer[1];
         req.token=bearerToken;
         next();
     }    
     else{
         res.sendStatus(403);
     }
 }
 
app.use('/user', userroutes);
app.use('/post', postroutes);
app.use('/comment', commentroutes);
app.use('/reaction', reactionroutes);
app.use('/friend', friendroutes);

app.listen({port:5000},async()=>{
    console.log('server up on http://localhost:5000') 
    await sequelize.sync()
    console.log('database connected!')
})
  
