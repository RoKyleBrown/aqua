import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
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
    errors: state.errors.session
})


const mapDispatchToProps = (dispatch) => ({

    signup: user => (dispatch(signup(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)





