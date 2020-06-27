import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = (state, ownProps) => ({
    user: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        selected_movies: [],
        test: ''
    },
    errors: state.errors.session,
    history: ownProps.history
})


const mapDispatchToProps = (dispatch) => ({

    signup: user => (dispatch(signup(user))),
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)





