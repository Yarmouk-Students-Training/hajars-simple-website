const http=require('http');
const fs =require('fs');
const server=http.createServer((req,res)=> {
    //console.log('request made');
    console.log(req.url,req.method);

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
    fs.readFile('./views/index2.html',(err,data) =>{
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

server.listen(3000,'localhost',()=> {
    console.log('listening for request on port 3000');
    

})