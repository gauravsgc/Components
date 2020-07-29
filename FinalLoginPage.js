import React, { Component } from 'react'
import './LoginPage.css'
import MainPage from './MainPage';
import axios from 'axios';
export class FinalLoginPage extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          isLoggedIn:0,
          persons: [],
         
     };
     this.handleSubmit = this.handleSubmit.bind(this);
 }
 componentDidMount() {
  axios.get(`https://swapi.dev/api/people/`)//http get request res=>respone https://jsonplaceholder.typicode.com/users
    .then(res => {
//console.log(res.data.results);
  
   this.setState({ persons:res.data.results });
  
    }
   
    
    )
   
}


    
    handleSubmit=event=>
    {
        
        event.preventDefault();
        
        const name = this.name.value;
        const pwd = this.pwd.value;
        const {persons}=this.state;
        console.log({persons})
        const data =persons.filter(x=>x.name===name && x.birth_year ===pwd);
       const a=data.length;
       console.log(a);
        if(a)
        {
            //alert('you are in');
          console.log('you are in');
          this.setState({isLoggedIn:1});
          //const {persons}=this.state;
         // console.log({persons})
       //here array filter will work...
    
        }
    }
    
        
    render() {
      
        const isLoggedIn = this.state.isLoggedIn;
        
    let msg;
    if (isLoggedIn) {
     
      msg = <MainPage />;
     
    } else {
      msg = '';
    }
        return (
            <div  className="a">
           <div className="form-group">
           <form onSubmit={this.handleSubmit} >
    <label >Name</label>
    <input type="text" className="form-control" placeholder="Name" ref={(input)=>this.name=input} />
    <label >DOB</label>
    <input type="text" className="form-control" placeholder="DOB" ref={(input)=>this.pwd=input}   />
 
            <button  type="submit" className="btn btn-success">Login </button>
          
          
            </form>
            
            </div> 
           
            {msg} 
            
            {this.state.isLoggedIn}
            </div>
            
        )
    }
}

export default FinalLoginPage

