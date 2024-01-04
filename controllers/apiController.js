var Todos = require("../models/todoModel");
var bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos/:uname", async function (req, res) {
    try {
      const todos = await Todos.find({ username: req.params.uname }).exec();
      res.send(todos);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/api/todo/:id", async function (req, res) {
    try {
      const todo = await Todos.findById(req.params.id).exec();
      res.send(todo);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post("/api/todo", async function (req, res) {
    try {
      if (req.body.id) {
        await Todos.findByIdAndUpdate(req.body.id, {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        }).exec();
        res.send("Success");
      } else {
        var newTodo = new Todos({
          username: "test",
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        });
        await newTodo.save();
        res.send("Success");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.delete("/api/todo", async function (req, res) {
    try {
      await Todos.findByIdAndRemove(req.body.id).exec();
      res.send("Success");
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
};
