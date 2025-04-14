
import './App.css';
import Navbar from './Components/Navbar';
import Home from'./Pages/Home';
import Contact from './Pages/Contact'
import Menu  from './Pages/Menu';


import { BrowserRouter as Router,Routes, Route,Link}from 'react-router-dom';



function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  
   

      <Routes>
      <Route path='/home' exact Component={Home} />

      <Route path='/menu' exact Component={Menu}/>

      <Route path='/contact-us' exact Component={Contact}/>
    
    
      </Routes>
      
</Router>
    
      
    </div>
  );
}

export default App;
