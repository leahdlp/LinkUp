import React from 'react';
import ReactDOM from 'react-dom';

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
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root);
})