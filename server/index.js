import path from 'path';
import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import messagesRoutes from './routes/messagesRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

import connectWithMongoDb from './db/connectWithMongoDb.js';
import { app, server } from './socket/socket.js';

// const app = express(); // now using this on socket.js file
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


config();
const corsOptions = {
    // origin: 'https://chat-application-react-mern.vercel.app',
    origin: 'https://chat-application-react-mern.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
    optionsSuccessStatus: 204 // Response status for successful OPTIONS requests
};

app.use(express.urlencoded({ extended: true })); // for body- form urlencoded
app.use(express.json()); // for parse incoming payload with json encoding from req.body
app.use(cookieParser()); // for parse incoming cookies with json encoding from req.cookies
app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//     res.send("We are making A realtime chat application!");
// });

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

connectWithMongoDb();
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});