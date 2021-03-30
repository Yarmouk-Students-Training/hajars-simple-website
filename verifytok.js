
//verify token

   export function verifyToken(req,res,next){
    const bearerHeader= req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer=bearerHeader.split(' ');
        const bearerToken=bearer[1];
        req.token=bearerToken;
        
        }    
    else{
        res.sendStatus(403);
    }
}  
module.exports={verifyToken};