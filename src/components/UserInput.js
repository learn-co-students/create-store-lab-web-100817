import React, { Component } from "react";

class UserInput extends Component {
  state = { username: "", hometown: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    });
  };

  handleOtherChange = e => {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <input
            type="text"
            value={this.state.hometown}
            onChange={this.handleChange}
            name="hometown"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
