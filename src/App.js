

import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
    <div>
    
    <Routes>
  <Route exact path="/" element={<Home />} />
  
  <Route exact path="/login" element={<Login/>} />
  <Route exact path="/createuser" element={<Signup/>} />



</Routes>

      </div>
      </Router>
  )
}

export default App;
