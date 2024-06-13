const EventEmitter = require('node:events');

var myevent = new EventEmitter();

myevent.on("flashran",()=>{
    console.log("Flash started running");
})

myevent.on("flashran",()=>{
    console.log("Batman started running");
})

myevent.emit("flashran");
