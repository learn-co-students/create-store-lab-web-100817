import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '', hometown:''
  }

  handleChange = (e) => {
    let target = e.target
    this.setState({[target.name]: target.value})
  }

  send = (e) => {
    e.preventDefault();
    this.props.store.dispatch({type: 'ADD_USER', user: this.state})
  }
  render() {
    return(
      <div>
        user input
        <form onSubmit={(e) => this.send(e)}>
          <input name='username' onChange={(e) => this.handleChange(e)} value={this.state.username} placeholder='username'></input>
          <input type={'text'}name='hometown' onChange={(e) => this.handleChange(e)} value={this.state.hometown} placeholder='hometown'></input>
          <button type='submit'>send it</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
