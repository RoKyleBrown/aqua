import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    window.login = login;
    window.signup = signup;

    // TESTING START
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // TESTING END

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        window.getState = store.getState;
        delete window.currentUser;
    } else {
        store = configureStore();
        window.getState = store.getState;
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});