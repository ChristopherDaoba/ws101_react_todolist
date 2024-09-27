import { Component } from "react";

class HandlingClass extends Component 
    handleclass() {
        console.log("I am the Class")
    }
    
    render() {
        return (
            <>
            <h1>this is how to handle events in Class elements</h1>
            <button onClick={this.handlingclass}>Click Me Now!</button>
            </>
        )    
}
}

export default HandlingClass;
