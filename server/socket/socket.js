import {Server} from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

export const getReceivedSocketId = (receivedId)=>{
    return userSocketMap[receivedId];
}

const userSocketMap = {};
io.on('connect', (socket)=>{
    console.log('User is connected with socket.io connection!!! ', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") {
        userSocketMap[userId] = socket.id;
    }
    // io.emit() is used to send events to all connected clients
    io.emit("getOnlineUser",Object.keys(userSocketMap)); 

    socket.on('disconnect', ()=>{
        console.log('User is disconnected with socket.io connection!!! ', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUser",Object.keys(userSocketMap));
    });

    // socket.on('chat message', (msg)=>{
    //     console.log('Message from client: ', msg);
    //     io.emit('chat message', msg);
    // });

    // socket.on('typing', (msg)=>{
    //     console.log('Typing from client: ', msg);
    //     io.emit('typing', msg);
    // });

    // socket.on('stop typing', (msg)=>{
    //     console.log('Stop typing from client: ', msg);
    //     io.emit('stop typing', msg);
    // });

    // socket.on('user joined', (msg)=>{
    //     console.log('User joined from client: ', msg);
    //     io.emit('user joined', msg);
    // });
})

export {app, io, server};