import Navbar from "../src/components/navigation/navbar/navbar"
import './App.css';
import Login from "./components/Authentication/login/login";
import Home from "./components/home/home"
function App() {
  return (
    <div className="App">
      <Navbar/>
     
  <Home/>
    </div>
  );
}

export default App;
