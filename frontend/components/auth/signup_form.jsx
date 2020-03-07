import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.doTheRightThing = this.doTheRightThing.bind(this)
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    doTheRightThing(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
            this.props.signup(user);
              this.props.history.push(`/movies`);
    }
    render() {
        return (
            
            <div className="signup-background">
                <ul className="signup-nav">
                    <li id="logo-signup">Not Hulu</li>
                    <li> <Link id="signup-login-btn" to={`/session/login`}> 
                    Log In</Link></li>
                </ul>
                <div className="signup-form-container">
                    <p>Create Your Account</p>
                    <p>Use your email and password to watch on your favorite devices.</p>
                    <form className="signup-form" 
                    onSubmit={this.doTheRightThing}>
                        <div className="signup-form-background">
                            <label><span id="signup-first-name">First Name</span> 
                                <input type="text"
                                />
                            </label>
                            <label><span>Last Name</span> 
                                <input type="text"
                                />
                            </label>
                            <label><span id="signup-email">email</span> 
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </label>
                            <label><span>password</span> 
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </label>
                        </div>
                        <p id="signup-t-c">By clicking "SIGN UP" you agree to the Terms of Use and Privacy Policy.</p>
                        <button className="signup-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;