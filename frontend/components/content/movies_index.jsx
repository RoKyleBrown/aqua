import React from "react";


class MoviesIndex extends React.Component {
    render () {
        
        if (this.props.currentUser) {
            return (
                <div>
                    <h3>Hello {this.props.currentUser.email}</h3>
                    <button onClick={() => this.props.action()}>Log Out
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Log In</h3>
                </div>
            )
        }
    }
}

export default MoviesIndex; 