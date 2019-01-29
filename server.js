const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var todos = [
  {
    id: "1",
    title: "Hello",
    completed: false
  },
  {
    id: "2",
    title: "There",
    completed: false
  },
  {
    id: "3",
    title: "Person",
    completed: false
  }
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  let id = req.body.newTodo.id;
  let title = req.body.newTodo.title;
  let completed = req.body.newTodo.completed;

  todos.push({ id, title, completed });

  res.json(todos);
});

app.post("/api/todos:id", (req, res) => {
  let id = req.body.id;

  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  res.json(todos);
});

app.delete("/api/todos:id", (req, res) => {
  var idNum = req.params.id;
  todos = todos.filter(todo => todo.id !== idNum);
  res.json(todos);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
