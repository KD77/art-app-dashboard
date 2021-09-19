import React, { Component } from "react";
import axios from "axios";
import "./post.css";

class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      view: "",
    };
  }
  handleChange = (props) => {
    this.props.history.push("/allPost");
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://art-restful-api.herokuapp.com/artPeices/", this.state)
      .then((response) => {
        console.log(response);
        this.handleChange(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { name, description } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} id="contact">
          <label>
            <input
              type="text"
              name="name"
              placeholder="Title of the Art"
              value={name}
              onChange={this.changeHandler}
            />
          </label>
          <label>
            <textarea
              name="description"
              placeholder="Write the description of the Art here..."
              required
              value={description}
              onChange={this.changeHandler}
            ></textarea>
          </label>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostData;
