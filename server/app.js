
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors= require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router)


mongoose.connect("mongodb://localhost:27017/book").then(()=>console.log("Connected to DB"))
.then(() => {
    app.listen(5000)
}).catch((error)=>console.log(error));