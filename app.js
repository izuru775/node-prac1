const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

// Serve static files
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.use('/test', router);

// router.get('/:name',(req,res)=>{
//     let name = req.params.name
//     console.log(name);
//     res.status(400).send(`<h1>${name}</h1>`);
// });

router.get('/add',(req,res)=>{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    res.redirect(`/result?sum=${sum}`);
});

router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public/html','index.html'))
});

router.get('/submit',(req,res)=>{
    console.log(req.query.firstName);
    res.send(`<h1>Hi ${req.query.firstName} ${req.query.lastName}!. your request submitted.</h1>`)
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})