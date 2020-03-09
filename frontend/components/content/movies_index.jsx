import React from "react";
import Route from "react-router-dom";


class MoviesIndex extends React.Component {
    constructor(props){
        super(props);
        this.rightThing = this.rightThing.bind(this)
    }
    // componentDidMount() {
    //     !!this.props.currentUser;
    // }

    rightThing() {
       this.props.logout(this.props.currentUser);
       this.props.history.push('/');
    }

    render () {
        debugger;
        if (this.props.currentUser) {
            return (
                <div>
                    <h3>Hello {this.props.currentUser.first_name}</h3>
                    <button onClick={this.rightThing}>Log Out
                    </button>
                </div>
            )
        }
            else if (this.props.errors.length) {
                return (
                    <div>
                        {this.props.errors.map( err => 
                                <ul>{err}</ul>
                            )}
                    </div>
                )
            }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default MoviesIndex; 