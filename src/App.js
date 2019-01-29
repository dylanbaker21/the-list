import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("/api/todos").then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    axios
      .post(`/api/todos${id}`, { id })
      .then(res => this.setState({ todos: res.data }));
  };

  // Delete Todo
  delTodo = id => {
    axios.delete(`/api/todos${id}`).then(res =>
      this.setState({
        todos: res.data
      })
    );
  };

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    axios
      .post("/api/todos", { newTodo })
      .then(res => this.setState({ todos: res.data }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodos addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
