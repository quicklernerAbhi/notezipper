const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
dotenv.config(); //to use env variables we need to initialize config function
const port = process.env.PORT || 5000;

// console.log( process.env.NEW);
const app = express();

app.listen(port , ()=>{
    console.log("server started on port " ,port);
})

// API ENDPOINTS 

app.get("/",(req,res)=>{
    res.send("Hi, I am live");
})

// ALL NOTES 
app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

// SPECIFIC NOTE WITH ID 
app.get("/api/note/:id",(req,res)=>{
    id = req.params.id;
    // let note = notes.filter((note)=>{
    //     return note._id == id;
    // })
    // Filter function will return new array with the notes satisfied the condition 
    let note = notes.find((note) => {
        return note._id == id;
    })
    res.json(note);
    //find will return only the object which satisfied the condition
})