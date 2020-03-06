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
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.doTheRightThing}>
                    <label>email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;