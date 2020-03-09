import React from 'react';
import { Redirect} from 'react-router-dom'


class ModalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.doTheRightThing = this.doTheRightThing.bind(this)
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
    doTheRightThing(e) {
        e.preventDefault();
        const user = Object.assign( {}, this.state)
        this.props.login(user)
        this.props.history.push('/movies');
    }
    render() {

        return (
            <div className="login-modal-form">
               <h3 id="title-login">Log in</h3>
                <button className="guest-modal-btn">Log In as a guest
                    </button>
                <div id="modal-line">
                    <p>or</p>  
                </div>
                <hr id="left-ln"></hr>
                <hr id="right-ln"></hr>
                <form onSubmit={this.doTheRightThing}>
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
                    </label>
                    <button className="login-modal-btn">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ModalLoginForm;