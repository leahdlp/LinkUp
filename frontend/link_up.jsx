import React from 'react';
import ReactDOM from 'react-dom';
import { fetchGroups, fetchGroup, createGroup, updateGroup, deleteGroup } from './actions/groups_actions'
import { createMember, deleteMember } from './actions/members_actions';
import { fetchLocations, fetchLocation } from './util/locations_api_util';
import { fetchCategories, fetchCategory } from './util/categories_api_util';
import { fetchSubcategories, fetchSubcategory } from './actions/subcategories_actions';
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