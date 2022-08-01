import "./assets/App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navegador from "./components/Navegador";
import Main from "./pages/Main";

function App() {
    return (
      <div className="App">
        <Router><Navegador/>
          <Routes>
            
            <Route exact path = "/"  element = {<Home/>}/>
            <Route exact path = "/register"  element = {<Register/>}/>
            <Route exact path = "/login"  element = {<Login/>}/>
            <Route exact path = "/main"  element = {<Main/>}/>
          </Routes>
        </Router>
      </div>
    )
}


export default App;
