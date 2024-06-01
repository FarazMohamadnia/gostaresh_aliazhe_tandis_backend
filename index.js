require('dotenv').config()
//express import
const express = require('express');
const app = express();
// mongoose conection
require('./config/mongoose/mongooseConfig');
// parse json
app.use(express.json());
// Routes config
const apiRouter = require('./routes/index');


const port = process.env.PORT || 1100

app.use('/api' , apiRouter);

app.get('/' , (req , res)=>{
    res.send('Connect to backend')
});

app.listen(port , ()=>{
    console.log(`Start app in Port : ${port}`)
});