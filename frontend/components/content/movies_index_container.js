import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import MoviesIndex from './movies_index';

const mapStateProps = (state) => {
    return {
    currentUser: state.entities.users[state.session.id]
    }
}


const mapDispatchToProps = (dispatch) => ({
    action: user => dispatch(logout(user))
})


export default connect(mapStateProps, mapDispatchToProps)(MoviesIndex);


