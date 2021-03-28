import React, { Component } from 'react';

class DefaultClass extends Component {
    // create ref to html element
    state = {username: ""};
    divref = React.createRef();
    handle = (e) => {
        console.log(this.divref.current.value);
    }

    render() {
        return (
            <div ref={this.divref} value={this.state.username} onChange={event => this.setState({username: event.target.value})}>
                
            </div>
        );
    }
}

export default DefaultClass;