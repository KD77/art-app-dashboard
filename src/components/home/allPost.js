import React, { Component } from "react";
import axios from "axios";
import "./allPost.css";

class AllPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    const access_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQxZWQwNWVmZGU5YTg5ODY3ZTI0ZGMiLCJpYXQiOjE2MzE5OTU1OTl9.HJTplNDplrRwgY08vs8AQrDe32GCKdKR9FUcnvDURNA";

    axios
      .get("https://art-restful-api.herokuapp.com/artPeices/", {
        headers: {
          "auth-token": ` ${access_token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        this.setState({ data: data });
        //console.log(data)
      })
      .catch((error) => {
        console.log(error);

        this.setState({ errorMsg: " Error retreiving data" });
      });
  }
  render() {
    const { data, errorMsg } = this.state;
    return (
      <div className="container-data">
        List of Art
        <ul className="data">
          {data.length
            ? data.map((data) => (
                <li key={data.id}>
                  {data.name}
                  {data.description}
                </li>
              ))
            : null}
          {errorMsg ? <li>{errorMsg}</li> : null}
        </ul>
      </div>
    );
  }
}

export default AllPost;
