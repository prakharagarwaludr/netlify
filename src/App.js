import React, { Component } from 'react';   
import './App.css';
import ToDos  from './components/ToDos';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

  }     
  
    state = { 
  todos:[
    {
      id:1,
      Name:'.NET CORE',
      IsCompleted :false
    },
    {
      id:2,
      Name:'Angular',
      IsCompleted :false
    },
    {
        id:3,
        Name:'React',
        IsCompleted :false
    },
   ]
  }


  render() { 

    return (    
     
     <div className="font-weight:bolder m-2 color:blue;">
        <p className="h6 color:blue text-uppercase bg-info bg-success w-100">
                                 This is my first react Application from app.js (Default Page for application)
        </p>  
             
                   <ToDos todoss ={this.state.todos} />     
               
      </div>
       );
  }
}
 
export default App;

