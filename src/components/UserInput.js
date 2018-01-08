import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleHometownChange = (event) => {
    this.setState({hometown: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: this.state});
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input
            type = "text"
            placeholder = "username"
            value = {this.state.username}
            onChange = {this.handleUsernameChange}
          />
          <input
            type = "text"
            placeholder = "hometown"
            value = {this.state.hometown}
            onChange = {this.handleHometownChange}
          />

          <input type = "submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
