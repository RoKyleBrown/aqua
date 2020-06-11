import React from 'react';
import { withRouter } from 'react-router-dom'


class ModalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.doTheRightThing = this.doTheRightThing.bind(this);
        this.demoLogIn = this.demoLogIn.bind(this);

    }
   
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
    doTheRightThing(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state)
        this.props.login(user)
            .then(() => this.props.history.push('/movies'));  
    }
    demoLogIn(e) {
        e.preventDefault();
        const guest = {
            email: 'guest@aqua.com',
            password: '123asd'
        }
        this.props.login(guest)
            .then(() => this.props.history.push('/movies'));
    }
    loggedIn (e) {
        e.preventDefault();

    }
    render() {
        
        return (
            <div className="login-modal-form">
               <h3 id="title-login">Log in</h3>
                <button className="guest-modal-btn" onClick={this.demoLogIn}>
                    Log In as a guest
                    </button>
                <div id="modal-line">
                <hr id="left-ln"></hr>
                    <p>or</p>  
                <hr id="right-ln"></hr>
                </div>
                <form onSubmit={ this.doTheRightThing}>
                <div 
                className="login-modal-form-container">
                    <label><span id="modal-login-email">email</span> 
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label><span id="modal-login-password">password</span>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                         <p id="login-modal-error-message">
                             {this.props.errors.filter( err => 
                                err.includes("username")
                                )}</p>
                    </label>
                    <button className="login-modal-btn">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ModalLoginForm);