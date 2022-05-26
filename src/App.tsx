import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"

function App() {
  
  // const [user,setUser] = useState<boolean>(false)
  // console.log(user);
  
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
