import React, { Component } from "react";
import axios from "axios";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = (props) => {
    this.props.history.push("/login/login");
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://art-restful-api.herokuapp.com/api/user/register",
        this.state
      )
      .then((response) => {
        this.handleChange(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} id="registration-form">
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="text"
              name="password"
              placeholder="password"
              value={password}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            <p>Confirm Password</p>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={this.changeHandler}
            />
          </label>
          <div>
            <button type="submit">register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
