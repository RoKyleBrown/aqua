import React from 'react';
import { Link } from 'react-router-dom'


class LoginForm extends React.Component {
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
           .then(() => this.props.history.push('/movies'));
    }
    render() {
        return (
            <div className="login-page-background">
                <ul className="login-page-nav">
                    <li><Link id="logo-login-page" to={'/'}>aqua</Link></li>
                    <li> <Link id="signup-login-btn" to={`/session/login`}>
                        Log In</Link></li> 
                </ul>
                <div className="login-page-form-container">
                    <p>Log in</p>
                    <form className="login-page-form" 
                    onSubmit={this.doTheRightThing}>
                        <div className="login-page-form-background">
                            <label> <span id="login-page-email">email</span> 
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label><span id="login-page-password">password</span> 
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                                <p id="login-page-error-message">
                                    {this.props.errors.filter(err =>
                                        err.includes("username")
                                    )}</p>
                            </label>
                        </div>
                        <button className="login-page-btn">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;