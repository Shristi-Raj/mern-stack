import cors from 'cors';
import express from "express";
import mongoose from "mongoose";


const PORT = 4000;
const app = express();

app.use(cors);

await mongoose.connect("mongodb+srv://bitfumes:Ankiraj2507@bitfume-mern.7msqwoe.mongodb.net/");
console.log('MongoDB connection is successful')

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(PORT,() => {
    console.log("server is running at http://localhost:4000");
})