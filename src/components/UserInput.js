import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      hometown: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({ type: "ADD_USER", user: this.state });
    this.setState({
      username: "",
      hometown: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="username" type="text" onChange={this.handleChange} />
          <input name="hometown" type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default UserInput;
