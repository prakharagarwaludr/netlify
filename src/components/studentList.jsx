import React, { Component } from 'react';   

class studentList extends Component {
    state = {  }

    componentWillMount() {
        console.log('Component will mount!')
     }
    componentDidMount() {
        console.log('Component did mount!')
        }

    render() { 
        return ( 
        <div>
            Student List Component.
        </div>
         );
    }
}
 
export default studentList;