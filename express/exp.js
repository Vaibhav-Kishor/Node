const path = require('path');
const express = require('express');
const app = express();

// app.get('',(req,res)=>{
//     res.send('Hello, this is Home Page');
// })
// app.get('/about',(req,res)=>{
//     res.send('Hello, this is About Page');
// })
// app.get('/service',(req,res)=>{
//     res.send('Hello, this is Service Page');
// })
// app.get('/contact',(req,res)=>{
//     res.send('Hello, this is Contact Page');
// })

// app.listen(4500);

//! render html elements
// app.get("",(req,res)=>{
//     res.send("<h1>Home Page</h1>");
// })

//! render json data
// app.get("",(req,res)=>{
//     res.send([
//         {
//             name:'vaibhav',
//             email: 'vaibhavkishor7@gmail.com'
//         },
//         {
//             name:'robin',            
//             email:'vaibhavvirtual1@gmail.com'
//         }
//     ])
// })

//! getting data from parameter
// app.get("",(req,res)=>{
//     res.send(`your name is ${req.query.name}`);
// })


//! rendering html file 
//? 1. using static method of express
const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));

//? 2. using sendfile method of execute express
// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/error.html`);
// })

//! dynamic data rendring
app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const userData = {
        name: 'vaibhav kishor',
        email:'vaibhavkishor7@gmail.com',
        gender:'male'
    }
    res.render('profile',{userData});
})

app.listen(4500);