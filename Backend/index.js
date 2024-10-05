const express = require("express");
const {createTodo, updateTodo} = require ("./types")

const app = express();

app.use(express.json())





app.get("/todos", function (req,res) {

    res.send("hello there ")
})


// creating a todo application
app.post("/todos",function (req,res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    const response = parsePayLoad.success;

    if(!response) {
        res.status(411).json({
            message : "bad input"   
        })
    }


    res.json({
        message : "credentials entered correctly "
    })
})


// MARK AS COMPLETE 
app.put("/completed", function(req,res) {
    const payLoadId = req.headers.id ;
    const checkPayLoadID = updateTodo.safeParse(payLoadId);
    const response = checkPayLoadID.success;

    if(!checkPayLoadID){
        res.status(411).json ({
            messgae : "invalid id "
        })
    }

    res.status(200).json ({
        messgae: "all good id "
    })
})


app.listen(4001)
console.log("Server is running on port 4001")