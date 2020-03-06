import React from 'react';


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
        this.props.history.push('/movies');
    }
    render() {
        return (
            <div>
                <p>Log in</p>
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
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;