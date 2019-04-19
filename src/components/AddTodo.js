import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          placeholder="Add Item..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
