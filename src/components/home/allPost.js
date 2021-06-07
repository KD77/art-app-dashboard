import React, { Component } from 'react';
import axios from 'axios';
import './allPost.css'

class AllPost extends Component {
  constructor(props) {
    super(props);

    this.state= {
        data:[],
        errorMsg:''
    }
  }

  componentDidMount() {
    axios.get('https://art-restful-api.herokuapp.com/artPeices/')
    .then(response=>{
      const data= response.data;
      this.setState({ data: data});
      //console.log(data)
    }).catch(error=>{
      console.log(error)
      this.setState({errorMsg: ' Error retreiving data'});
      
    })
  }
  render() {
    const {data, errorMsg} = this.state;
    return (
      <div className="container-data">
       List of Art
     
        <ul className="data">
          {data.length ?
          data.map(data=><li key={data.id} >{data.name}{data.description}</li>): null}
          {
            errorMsg ? <li>{errorMsg}</li> : null
          }
        </ul>
        
      </div>
    );
  }
}

export default AllPost;
