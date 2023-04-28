const express = require('express');
const mongoose = require('mongoose');
const todoModel = require("./models/todo")
const cors = require('cors');

const app = express() 

app.use(express.json())
app.use(cors())

mongoose.connect("", {
    dbName:"",
}).then(() => console.log("db connected successfully"))
.catch((e) => console.log(e))

app.get("/",(req,res) => {
    res.send("Api is up and running")
})

app.get("/getTodos" , async (req,res) => {

      const todos = await todoModel.find({})

      res.send({
        status:"success",
        todos,
      })
})

app.post("/addTodos", async (req,res)=> {
    const todo = req.body
    const todolist = new todoModel(todo)
    await todolist.save()

     res.send(todo)
})

app.delete("/deleteTodos/:id", async (req,res) => {
     const id = req.params.id;

     await todoModel.findByIdAndRemove(id).exec()
     res.send("deleted")
})

app.listen(4000,(req,res)=> {
    console.log("Api running on port 4000")
})