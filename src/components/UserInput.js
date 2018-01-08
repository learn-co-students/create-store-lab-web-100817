import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  };

  updateUser = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitUser = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
    this.setState({
      username: '',
      hometown: ''
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.submitUser(e)}>
          <input
            onChange={e => this.updateUser(e)}
            type="text"
            name="username"
            value={this.state.username}
          />
          <p>{this.state.username}</p>
          <input
            onChange={e => this.updateUser(e)}
            type="text"
            name="hometown"
            value={this.state.hometown}
          />
          <p>{this.state.hometown}</p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
