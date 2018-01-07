import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  };

  handleUsernameChange = e => this.setState({ username: e.target.value });

  handleHometownChange = e => this.setState({ hometown: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: { username: this.state.username, hometown: this.state.hometown }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="user name..."
            onChange={this.handleUsernameChange}
            value={this.state.username}
          />
          <input
            type="text"
            placeholder="hometown..."
            onChange={this.handleHometownChange}
            value={this.state.hometown}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
