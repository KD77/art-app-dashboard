import Navbar from "../src/components/navigation/navbar/navbar";
import "./App.css";
import Login from "./components/Authentication/login/login";
import PostData from "./components/post/post";
import AllPost from "./components/home/allPost";
import Register from "./components/Authentication/registration/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/allPost" render={(props) => <AllPost />} />
          <Route path="/post" render={(props) => <PostData {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/register" render={(props) => <Register {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
