import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {


            }
    render() { 
        return (  
            <React.Fragment>
                        {this.props.todoItemName.Name}
            </React.Fragment>
        );
    }
}
 
export default ToDoItem;      