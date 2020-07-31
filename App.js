import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route,  Switch,NavLink } from 'react-router-dom'; 
import Home from './component/home'; 
import About from './component/about'; 
import Contact from './component/contact'; 
//import Nav from './component/Nav';
import './App.css'; 
import Nav from './component/Nav';
  
class App extends Component { 
  render() { 
    return ( 
      <React.Fragment>
       <Router> 
           <div className="App"> 
            
           <nav className="navbar navbar-expand-lg navbar-light  bg-danger">
                    <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item" active> 
                <NavLink to="/" exact activeStyle={{color:'green'}} className="nav-link text-indigo">Home</NavLink> 
              </li> 
              <li  className="nav-item"> 
                <NavLink to="/about" exact activeStyle={{color:'green'}} className="nav-link">About Us</NavLink> 
              </li> 
              <li className="nav-item" > 
                <NavLink to="/contact" exact activeStyle={{color:'green'}} className="nav-link">Contact Us</NavLink> 
              </li>
              </ul> 
             
              </div>
             </nav>
             <Nav />
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/contact' component={Contact}></Route> 
            </Switch> 
          </div> 
       </Router> 
       </React.Fragment>
   ); 
  } 
} 
  
export default App