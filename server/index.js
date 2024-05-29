const express = require('express');
const mongoose = require('mongoose'); 
const User = require('./models/User')
const mongodbUrl = "mongodb+srv://chatmern:mongo123456@cluster0.xzzhyfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodbUrl);
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.get('/test', (req,res)=>{
    res.json('test');
});

app.post('/signup', async (req,res)=>{
    try {
        const {name, password} = req.body;
        const createdUser = await User.create({name,password});
        const jwtKey = "kjhgfdfghjkljhg";
        jwt.sign({userId: createdUser._id}, jwtKey, {}, (err, token)=>{
            res.cookie('token',token).status(201).json({token: token, id: createdUser._id})
        });
        // res.json({name: name, password: password})
    } catch (error) {
        res.json(error)
        // if(error) throw error;
    }
})
app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});