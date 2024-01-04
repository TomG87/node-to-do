var Todos = require("../models/todoModel");

module.exports = function (app) {
  app.get("/api/setupTodos", async function (req, res) {
    // seed database
    var starterTodos = [
      {
        username: "Mike",
        todo: "Go Shopping",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "Tom",
        todo: "Go to Gym",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "Paul",
        todo: "Go to Movies",
        isDone: false,
        hasAttachment: false,
      },
    ];

    try {
      const results = await Todos.create(starterTodos);
      res.send(results);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
};
