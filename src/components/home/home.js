import React, { Component } from 'react';
import axios from 'axios';
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description:'',
      view:''
    }
  }
  changeHandler =e=>{
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post('https://art-restful-api.herokuapp.com/artPeices/', this.state)
    .then(response =>{
      console.log(response)
    }).catch(error =>{
      console.log(error)
    })
  }
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            <p>Title</p>
            <input 
            type="text"
            name = "name" 
            value={name}
            onChange={this.changeHandler}
            />
          </label>
          <label>
            <p>Description</p>
            <textarea name="description"
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

export default Home;
