import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            checked={this.props.todo.completed}
            type="checkbox"
            onChange={this.props.markComplete.bind(this, this.props.todo.id)}
          />
          {"   "}
          {this.props.todo.title}
          <button
            style={btnStyle}
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "10%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
