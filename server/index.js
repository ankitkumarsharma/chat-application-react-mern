const express = require('express');
const mongoose = require('mongoose'); 
const User = require('./models/User')
const mongodbUrl = "mongodb+srv://chatmern:mongo123456@cluster0.xzzhyfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodbUrl);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtKey = "kjhgfdfghjkljhg";
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.get('/test', (req,res)=>{
    res.json('test');
});

app.get('/profile',(req,res)=>{
    const token = req.cookies?.token;
    if(token){
        jwt.verify(token, jwtKey, {}, (err, data)=>{
            // if(err) throw err;
            res.json(data);
        })
    } else {
        res.status(401).json({message: 'Unauthorized'})
    }
    
});

app.post('/logout',(req,res)=>{
    res.cookie('token','', {sameSite:'none', secure: false}).json("Logout")
})
app.post('/signup', async (req,res)=>{
    try {
        const {name, password} = req.body;
        const createdUser = await User.create({name,password});
        jwt.sign({userId: createdUser._id, name}, jwtKey, {}, (err, token)=>{
            res.cookie('token',token,{sameSite:'none', secure: false}).status(201).json({token: token, id: createdUser._id, name: name})
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