import React, { Component } from 'react';   
class routing extends Component {
   
    render() { 
        console.log(this.props);
        return  (
            <div>

    <p> This is a Routing Page </p>          
            </div>  
            );
    }    
}
ReactDOM.render(routing, document.getElementById('root'))
export default routing;