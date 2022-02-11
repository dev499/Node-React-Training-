import React, { Component } from "react";
import {Link} from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
      isLoggedIn:false
    };
    this.handleChange=this.handleChange.bind(this)
    this.changeSubmit=this.changeSubmit.bind(this)
  }


  handleChange= (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  changeSubmit=(e) => {
    if(this.state.name==='admin@123' && this.state.pwd==='12345'){
    this.setState({isLoggedIn:true})
    }
    else{
      return alert('Enter correct email and password')
    }
  }


  render() {
    return (
      <form onSubmit={this.changeSubmit}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="pwd"
            value={this.state.pwd}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <Link to={'/'}>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        </Link>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}

export default SignIn;