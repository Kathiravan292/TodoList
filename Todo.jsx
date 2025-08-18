import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todos: []
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  addTodo = () => {
    if (this.state.task.trim() === "") return;
    this.setState({
      todos: [...this.state.todos, this.state.task],
      task: "" // clear input after adding
    });
  };

  deleteTodo = (index) => {
    const newTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "white", border: "1px solid red", padding: "50px" }}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Enter a task"
        />
        <button onClick={this.addTodo} style={{ background: "" }}>Add</button>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.todos.map((todo, index) => (
            <li key={index} style={{
              margin: "10px 0", display: "flex",             // 👈 makes items inline
              alignItems: "center",        // 👈 vertical alignment
              justifyContent: "space-between",
              color: "white"
            }}>
              <input

                type="checkbox"
                checked={todo.completed}
                onChange={() => this.toggleComplete(index)}
              />{" "}
              {todo}

              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
