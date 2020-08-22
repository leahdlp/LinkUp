import React from 'react';
import ReactDOM from 'react-dom';
import { fetchGroups, fetchGroup, createGroup, updateGroup, deleteGroup } from './actions/groups_actions'
import { createMember, deleteMember } from './actions/members_actions';
import { fetchLocations, fetchLocation } from './util/locations_api_util';
import { fetchCategories, fetchCategory } from './util/categories_api_util';
import { fetchSubcategories, fetchSubcategory } from './util/subcategories_api_util';
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
    // window.fetchGroups = fetchGroups;
    // window.fetchGroup = fetchGroup;
    // window.createGroup = createGroup;
    // window.updateGroup = updateGroup;
    // // window.deleteGroup = deleteGroup;
    // window.createMember = createMember;
    // window.deleteMember = deleteMember;
    window.fetchLocation = fetchLocation;
    window.fetchLocations = fetchLocations;
    window.fetchCategories = fetchCategories;
    window.fetchCategory = fetchCategory;
    window.fetchSubcategories = fetchSubcategories;
    window.fetchSubcategory = fetchSubcategory;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root);
})