import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          {"              First name:\n"}
          {this.props.todo.name.first}
          {"              Last name:\n"}
          {this.props.todo.name.last}
          {"              Balance:\n"}
          {this.props.todo.balance}
        </p>
      </div>
    );
  }
}

export default TodoItem;
