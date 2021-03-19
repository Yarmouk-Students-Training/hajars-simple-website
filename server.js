const http=require('http');
const fs =require('fs');
const _=require('lodash');

const server=http.createServer((req,res)=> {
    //console.log('request made');
    console.log(req.url,req.method);

    //lodash
     const num =_.random(0,20);
     console.log(num);
    
     const greet =  _.once(()=>{
        console.log('hello');
    });
    greet();
    greet();
     
     
    // if i want to sendback text/plain
    /* res.setHeader('content-type', 'text/plain');
    res.write('hello hajar');
    res.end();*/

    // if i want to sendback html page
    /*res.setHeader('content-type', 'text/html');
    res.write('<p>hello hajar</p>');
    res.write('<p>in html page</p>');
    res.end();*/
    
    //if i want to sendback external html file
    res.setHeader('content-type', 'text/html');
    let path= './views/';
    switch(req.url){
        case '/':
            path +='index2.html';
            res.statusCode =200;
            break;
        case'/about': 
            path +='about.html';
            res.statusCode =200;
            break;
        case'/about-blah': 
            res.statusCode =301;
            res.setHeader('Location','/about');
            res.end();
            
            break;   
      
        default:
            path +='404.html';
            res.statusCode =404;
            break;
     
    }
    //fs.readFile('./views/index2.html',(err,data) =>{ 
    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err); 
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
         
    });
});

server.listen(5051,'localhost',()=> {
    console.log('listening for request on port 5051');
    

})