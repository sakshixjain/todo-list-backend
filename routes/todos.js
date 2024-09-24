const express= require("express");
const router = express.Router();

// to create a todo
const {createTodo}= require("../controllers/createTodo");

// to get a todo
const {getTodo,getTodoById}= require("../controllers/getTodo");

//to update a todo
const {updateTodo} = require("../controllers/updateTodo");

//to delete a todo
const {deleteTodo} = require("../controllers/deleteTodo");
//define api routes


router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports  = router;