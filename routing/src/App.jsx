import Login from './components/login';
import Signup from './components/signup';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
    
     <Router>
      <nav className='nav'>
      <h1> BLOG</h1>
      
        <ul>
          
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>


      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
     </Router>

    </>

  );
}

export default App;
