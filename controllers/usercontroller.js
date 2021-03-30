const { user } = require('.././models');

const create_user = async(req,res)=>{
    const{userid,firstname,lastname,email,gender,dateofbirth, phonenumber}=req.body
    try{
       const newuser = await user.create({userid,firstname,lastname,email,gender,dateofbirth, phonenumber})
       return res.json(newuser)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
  }


const get_all_user = async(req, res) => {
    try{
        const users= await user.findAll();
        return res.json(users)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const get_specific_user = async(req, res) => {
    const userid= req.params.userid
    try{
        const userr= await user.findOne({where:{userid}})
        return res.json(userr)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

        
  const update_specific_user_info = async(req, res) => {
    
    const{userid,firstname,lastname,email,gender,dateofbirth, phonenumber}=req.body
    try{
        const userr= await user.findOne({where:{userid}})
        userr.firstname=firstname
        userr.lastname=lastname 
        userr.email=email
        userr.gender=gender
        userr.dateofbirth=dateofbirth
        userr.phonenumber=phonenumber
        await userr.save() 
        return res.json(userr) 
        //return res.json({ message: 'updated!' })
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'something went wrong'})
    }
  }

  const delete_user = async(req, res) => {
    const userid= req.params.userid
    try {
        const userr = await user.findOne({ where: { userid } })
        await userr.destroy()
        return res.json({ message: 'deleted!' })
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
  }

  module.exports = {
    create_user,
    get_all_user,
    get_specific_user,
    update_specific_user_info,
    delete_user
  } 