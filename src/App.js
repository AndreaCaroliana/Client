import "./assets/App.css";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    return (
      <div className="App">
        <Router>
          <Link to="/register">Register</Link>
          <Link to="/">Home</Link>
          <Routes>
            <Route exact path = "/"  element = {<Home/>}/>
            <Route exact path = "/register"  element = {<Register/>}/>
            <Route exact path = "/login"  element = {<Login/>}/>
          </Routes>
        </Router>
      </div>
    )
}


export default App;
