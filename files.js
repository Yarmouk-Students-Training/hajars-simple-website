const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt',(err,data) =>{
    if(err){
        console.log(err); //to print err if exist
    }
    console.log(data.toString()); //to print data in string 
});


//writing files
fs.writeFile('./docs/blog2.txt','hi from blog2',() =>{
    console.log('file was written');
});

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{

        if(err){
            console.log(err);
        }
        console.log('folder created');

    });
}
else{
    fs.rmdir('./assets',(err) =>{
        console.log('folder deleted');
    })
}

//deleing files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
