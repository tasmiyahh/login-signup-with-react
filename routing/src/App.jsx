import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";





function App() {
  return (
    <>
    
     <Router>
       <NavBar/>

      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
     </Router>

    </>

  );
}

export default App;
