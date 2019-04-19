import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <div>
        {this.props.todo.isActive ? (
          <TodoItem key={todo._id} todo={todo} />
        ) : null}
      </div>
    ));
  }
}

export default Todos;
