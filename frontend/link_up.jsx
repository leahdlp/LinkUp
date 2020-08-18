import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();

    // FOR TESTING 
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    // FOR TESTING

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    
    ReactDOM.render(<Root store={store}/>, root);
})