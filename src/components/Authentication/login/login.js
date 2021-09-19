import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = (props) => {
    this.props.history.push("/allPost");
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://art-restful-api.herokuapp.com/api/user/login", this.state)
      .then((response) => {
        console.log(response);
        this.handleChange(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            <p>username</p>
            <input
              type="text"
              value={email}
              name="email"
              onChange={this.changeHandler}
            />
          </label>
          <label>
            <p>password</p>
            <input
              type="text"
              value={password}
              name="password"
              onChange={this.changeHandler}
            />
          </label>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
