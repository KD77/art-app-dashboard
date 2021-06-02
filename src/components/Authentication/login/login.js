import React ,{Component}from 'react'


class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <p>username</p>
            <input type="text"/>
          </label>
          <label>
            <p>password</p>
            <input type="text"/>
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
