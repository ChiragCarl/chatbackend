const cors=require('cors');
const axios = require('axios');
const express=require('express');
const http=require('http');
const {Server}=require("socket.io");
const product_route=require('./Router/Product');

const app=express();
const server=http.createServer(app);

app.use(express.json());
app.use(cors());



const io=new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        method:['get','post']
    }
});

io.on("connection",(socket)=>{

    // when the users connected with the server 
    console.log(`user connected ${socket.id}`);
    
    //this method is used to join a room 
    socket.on('join_room',(data)=>{
        socket.join(data);
        console.log(`User details like: ${socket.id} and room Id : ${data} and message Id:`);
    });

    //this method can be used to send message 
    socket.on("send_message",(data)=>{
        console.log(data);
        socket.to(data.room).emit("receive_message",data);
    });

    //when the user disconnected over the server
    socket.on("disconnect",()=>{
        console.log('user Disconnected',socket.id);
    });

});

const PORT=process.env.PORT||5000;

app.use('/',product_route);
 

server.listen(PORT, () => {
    console.log("Server listen on")
});
