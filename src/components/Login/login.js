import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      reason: '',
      error: ''
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  loginUser = (e) => {
    if (this.state.name === '' || this.state.email === ''|| this.state.reason === '') {
      e.preventDefault();
      this.setState({error: 'Please Fill In All Inputs'})
    } else {
      this.props.setUserInfo({
        name: this.state.name,
        email: this.state.email,
        reason: this.state.reason
      });
      this.setState({
        name: '',
        email: '',
        reason: '',
        error: ''
      })
    }
  }

  render() {
    return (
      <form className='user-landing-page'>
      <div className='heading'>
        <h1>Welcome to V-RAD</h1>
      </div>
      <div className='input-div'>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='email'
          value={this.state.email}
          name='email'
          onChange={e => this.handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="reason-for-login">Reason for visit</label>
      </div>
        <select onChange={e => this.handleChange(e)} id='reason-for-login' name='reason' value={this.state.reason}>
          <option disabled selected value>
          -- select an option --
          </option>
          <option value="business">Business</option>
          <option value="vacation">Vacation</option>
          <option value="other">Other</option>
        </select>
        <div>
        <Link to='/areas'>
            <button type='submit' className="login-button" onSubmit={e => this.loginUser(e)}>Login</button>
        </Link>
        </div>
      {this.state.error &&
        <div>
          <p>{this.state.error}</p>
        </div>
      }
      </form>
    );
  }
}
