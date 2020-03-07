import React from 'react';

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
                    <li>Log In</li>
                </ul>
                <div className="signup-form-container">
                    <p>Create Your Account</p>
                    <form className="signup-form" onSubmit={this.doTheRightThing}>
                        <label>First Name
                            <input type="text"
                            />
                        </label>
                        <label>Last Name
                            <input type="text"
                            />
                        </label>
                        <label>email
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <label>password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;