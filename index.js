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
// cors package
const cors = require('cors')
app.use(cors());

// helmet package
const helmet =  require('helmet');
app.use(helmet());
//////////////////

const path = require('path');
app.use('/uploads/products', express.static(path.join(__dirname, 'uploads/products')));
app.use('/uploads/Story', express.static(path.join(__dirname, 'uploads/Story')));

const port = process.env.PORT || 1100

app.use('/api' , apiRouter);

app.get('/' , (req , res)=>{
    res.send('Connect to backend')
});

app.listen(port , ()=>{
    console.log(`Start app in Port : ${port}`)
});