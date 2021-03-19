const express =require('express');
const morgan= require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRoutes=require('./routes/blogRoutes');
//express app
const app =express();

//connect to mongoDB
const dbURI='mongodb+srv://hajar:Hh123456@nodetuts.ib459.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch(err => console.log(err));

//register view engine
app.set('view engine','ejs');

//listen for request without db
//app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
/*
//mongoose and mongo sandbox routs
app.get('/add-blog',(req,res)=> {
const blog =new Blog({
    title:'new blog2',
    snippet:'about my new blog',
    body:'more about my new blog'
});
blog.save()
  .then((result)=>{
      res.send(result)
  })
  .catch((err)=>{
      console.log(err);
  });
})
// to get all blogs
app.get('/all-blog',(req,res)=>{
Blog.find()
   .then((result)=>{
        res.send(result);
   })
   .catch((err)=>{
       console.log(err);
   });

})

//to git single blog using ID
app.get('/single-blog', (req, res) => {
    Blog.findById('6053421e9f0a8039bca09e07')
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }); */
//Routes
app.get('/',(req,res)=>{
    res.redirect('/blogs');
    //res.send('<p>HOME PAGE</p>');
    //res.sendFile('./views/index2.html', {root:__dirname});
    /*const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index3',{title: 'Home',blogs});*/
});
app.get('/signup',(req,res)=>{
    res.render('signup',{title: 'signup'});
 })
app.get('/login',(req,res)=>{
    res.render('login',{title: 'login'});
 })
app.get('/about',(req,res)=>{
   //res.send('<p>about PAGE</p>');
   //res.sendFile('./views/about.html', {root:__dirname});
   res.render('about3',{title: 'About'});
})
//blog routes
app.use('/blogs', blogRoutes);

//Redirects
/*app.get('/about-me',(req,res)=>{
    res.redirect('/about');
})*/

//404 page "if anyone send wrong url to the browser"
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html', {root:__dirname});
    res.status(404).render('4043',{title: '404'});
})