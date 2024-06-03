const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Message = require('./models/Message');
const mongodbUrl = "mongodb+srv://chatmern:mongo123456@cluster0.xzzhyfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodbUrl);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);
const ws = require('ws');
const jwt = require('jsonwebtoken');
const jwtKey = "kjhgfdfghjkljhg";
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'https://chat-application-react-mern.vercel.app',
    // origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
    optionsSuccessStatus: 204 // Response status for successful OPTIONS requests
  };
app.use(cors(corsOptions));

app.get('/test', (req, res) => {
    res.json('test');
});

app.get('/profile', (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, jwtKey, {}, (err, data) => {
            // if(err) throw err;
            res.json(data);
        })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }

});

app.post('/logout', (req, res) => {
    res.cookie('token', '', { sameSite: 'none', secure: true }).json("Logout")
})
app.post('/signup', async (req, res) => {
    try {
        const { name, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const createdUser = await User.create({
            name: name,
            password: hashedPassword
        });
        jwt.sign({ userId: createdUser._id, name }, jwtKey, {}, (err, token) => {
            res.cookie('token', token, { sameSite: 'none', secure: true }).status(201).json(
                { 
                    user: createdUser,
                    token: token,
                    admin:"Ankit",
                    id: createdUser._id, 
                    name: name 
                });
        });
        // res.json({name: name, password: password})
    } catch (error) {
        // res.json(error)
        res.status(406).json({ message: 'Record Duplicate' })
        // if(error) throw error;
    }
})

app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        const foundUser = await User.findOne({ name });
        if (foundUser) {
            const isAuth = bcrypt.compareSync(password, foundUser.password);
            if (isAuth) {
                jwt.sign({ userId: foundUser._id, name }, jwtKey, {}, (err, token) => {
                    res.cookie('token', token).json(
                        { 
                            id: foundUser._id, 
                            user: foundUser,
                            token: token,
                            admin: "Ankit"
                        })
                });
            } else {
                res.status(401).json({ message: 'Unauthorized' })
            }
        }
    } catch (error) {
        res.json(error);
    }
})
const server = app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

const wsServer = new ws.WebSocketServer({ server });

wsServer.on('connection', (conn, req) => {
    console.log("connected...");
    const cookies = req.headers.cookie;
    if (cookies) {
        const tokenCookieString = cookies.split(';').find(str => str.startsWith('token='));
        if (tokenCookieString) {
            const token = tokenCookieString.split('=')[1];
            jwt.verify(token, jwtKey, {}, (err, data) => {
                // if(err) throw err;
                // conn.send(JSON.stringify(data));
                // console.log(data);
                const { userId, name } = data;
                conn.userId = userId;
                conn.name = name;
            })
        }
    }

    conn.on('message', async (data)=>{
        const messageData = JSON.parse(data.toString());
        const {receiverId, message} = messageData.message;
        if(receiverId && message){
            const messageDB = await Message.create({
                sender: conn.userId,
                receiver: receiverId,
                message
            });
            [...wsServer.clients]
            .filter(client => client.userId === receiverId)
            .forEach(client => {
                client.send(JSON.stringify({
                    message: {
                        senderId: conn.userId,
                        receiverId: receiverId,
                        message: message,
                        id: messageDB._id
                    }
                }));
            })
        }
    });

    // console.log("clients >>>", [...wsServer.clients].map(conn => conn.name));
    [...wsServer.clients].forEach(client => {
        client.send(JSON.stringify({
            online: [...wsServer.clients].map(conn => ({
                name: conn.name,
                userId: conn.userId,
                online: true
            }))
        }));
    });

    
})