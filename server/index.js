const express = require('express');
const mongoose = require('mongoose'); 
const User = require('./models/User')
const mongodbUrl = "mongodb+srv://chatmern:mongo123456@cluster0.xzzhyfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodbUrl);
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.use(bodyParser.urlencoded({extended: true}))
app.get('/test', (req,res)=>{
    res.json('test');
});

app.post('/login', async (req,res)=>{
    const {name, password} = req.body
    try {
        await User.create({name,password});
    } catch (error) {
        res.json(error)
        if(error) throw error;
    }
    res.json({name: name, password: password})
})
app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});