import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleHomeTown = (event) => {
    this.setState({hometown: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> username </label>
          <input onChange={this.handleChange} type='text'/>
          <label> hometown </label>
          <input onChange={this.handleHomeTown} type='text'/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
