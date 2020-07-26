import React, { Component } from 'react'
import './LoginPage.css'

export class LoginPage extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          isLoggedIn:false
     };
     this.handleSubmit = this.handleSubmit.bind(this);
 }
    
    
    handleSubmit=event=>
    {
        event.preventDefault();
        const name = this.name.value;
        const pwd = this.pwd.value;
        if(name==='gaurav'&&pwd==='123')
        {
            alert('you are in');
          console.log('you are in');
         
        this.setState = {
            isLoggedIn:true
       };
       
        }
    }
    
        
    render() {
       // const isLoggedIn = this.state.isLoggedIn;
       // console.log(isLoggedIn);
      //  if (isLoggedIn) {
           // return(<div>
             //   The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
             // </div>)
       // }
        return (
            <div  className="a">
           <div className="form-group">
           <form onSubmit={this.handleSubmit} >
    <label >Name</label>
    <input type="text" className="form-control" placeholder="Name" ref={(input)=>this.name=input} />
    <label >Password</label>
    <input type="password" className="form-control" placeholder="Password" ref={(input)=>this.pwd=input}  />
 
            <button  type="submit" className="btn btn-success">Login </button>
          
            </form>
            
            </div>  
            </div>
            
        )
    }
}

export default LoginPage

