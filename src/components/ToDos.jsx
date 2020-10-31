import React, { Component } from 'react';   
import ToDoItemData  from './ToDoItem'; 

class ToDos extends Component {
    
    state = { 
    
    }

    render() { 
      
     return  this.props.todoss.map((todo)=> (
                         
                    <React.Fragment>
                                    <h3> <ToDoItemData  todoItemName = {todo} key = {todo.id} />  </h3>
                    </React.Fragment>
        ));
    }
    
}
export  default  ToDos;        