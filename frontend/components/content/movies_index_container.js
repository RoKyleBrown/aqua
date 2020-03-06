import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import MoviesIndex from './movies_index';

const mapStateProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
})


const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    logout: user => dispatch(logout(user))
})


export default connect(mapStateProps, mapDispatchToProps)(MoviesIndex);


