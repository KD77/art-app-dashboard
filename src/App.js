import Navbar from "../src/components/navigation/navbar/navbar"
import './App.css';
import Login from "./components/Authentication/login/login";
import PostData from "./components/post/post"
import AllPost from "./components/home/allPost"
function App() {
  return (
    <div className="App">
      <Navbar/>
     
  <PostData/>
    </div>
  );
}

export default App;
