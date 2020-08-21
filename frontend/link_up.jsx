import React from 'react';
import ReactDOM from 'react-dom';
import { fetchGroups, fetchGroup, createGroup, updateGroup, deleteGroup } from './actions/groups_actions'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore();;

    
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
    
    // FOR TESTING 
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchGroups = fetchGroups;
    window.fetchGroup = fetchGroup;
    window.createGroup = createGroup;
    window.updateGroup = updateGroup;
    window.deleteGroup = deleteGroup;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root);
})