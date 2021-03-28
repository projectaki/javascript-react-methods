import React, { Component } from 'react';

class DefaultClass extends Component {
    // create ref to html element
    state = {username: "", array: [1,2,3]};
    divref = React.createRef();
    handle = (e) => {
        console.log(this.divref.current.value);
        // add to array in state
        this.setState({array: [...this.state.array, [4]]});

    }

    render() {
        return (
            <div ref={this.divref} value={this.state.username} onChange={event => this.setState({username: event.target.value})}>
                
            </div>
        );
    }
}

export default DefaultClass;