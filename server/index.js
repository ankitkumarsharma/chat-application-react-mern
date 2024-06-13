import path from 'path';
import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import messagesRoutes from './routes/messagesRoutes.js';
import usersRoutes from './routes/usersRoutes.js';

import connectWithMongoDb from './db/connectWithMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


config();
app.use(express.urlencoded({ extended: true })); // for body- form urlencoded
app.use(express.json()); // for parse incoming payload with json encoding from req.body
app.use(cookieParser()); // for parse incoming cookies with json encoding from req.cookies

app.get('/', (req, res) => {
    res.send("We are making A realtime chat application!");
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

connectWithMongoDb();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});