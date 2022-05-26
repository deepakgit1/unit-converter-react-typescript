import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user,setUser] = useState<boolean>(false)
  console.log(user);
  
  return (
    <div>
      {
        user?
        <>
        <Header setUser={setUser} user={user}/>
        <Home />
        </>:
        <Login setUser={setUser}/>
      }
    </div>
  );
}

export default App;
