import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    let nextState = Object.assign( {}, oldstate);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        default:
            return oldstate;
    }
}

export default usersReducer; 