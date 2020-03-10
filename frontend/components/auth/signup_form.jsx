import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        }
        this.doTheRightThing = this.doTheRightThing.bind(this)
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    doTheRightThing(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
            this.props.signup(user)
            .then(() => this.props.history.push(`/movies`))
    }
    render() {

        return (
            <div className="signup-background">
                <ul className="signup-nav">
                    <li ><Link id="logo-signup" to={`/`}>aqua</Link></li>
                    <li> <Link id="signup-login-btn" to={`/session/login`}> 
                    Log In</Link></li>
                </ul>
                <div className="signup-form-container">
                    <p>Create Your Account</p>
                    <p>Use your email and password to watch on your 
                        favorite devices.</p>
                    <form className="signup-form" 
                    onSubmit={this.doTheRightThing}>
                        <div className="signup-form-background">
                            <label><span id="signup-first-name">First Name
                            </span> 
                                <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                />
                                <p id="signup-first-name-error">{this.props.errors.filter(err =>
                                    err.includes("First name")
                                )}</p>
                            </label>
                            <label><span>Last Name</span> 
                                <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                />
                            </label>
                            <label><span id="signup-email">email</span> 
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                                <p id="signup-email-error">{this.props.errors.filter(err =>
                                    err.includes("Email") 
                                )}</p>
                            </label>
                            <label><span>password</span> 
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                                <p id="signup-password-error">{this.props.errors.filter(err =>
                                    err.includes("Password")
                                )}</p>
                            </label>
                        </div>
                        <p id="signup-t-c">By clicking "SIGN UP" you agree to 
                        the Terms of Use and Privacy Policy.</p>
                        <button className="signup-btn">Sign Up</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;