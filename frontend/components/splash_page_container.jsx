import { login } from "./../actions/session_actions";
import { connect } from "react-redux";
import SplashPage from "./splash_page";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        history: ownProps.history
    }

}

const mapDispatchToProps = (dispatch) => ({
    login: user => (dispatch(login(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);