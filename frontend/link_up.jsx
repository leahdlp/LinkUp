import React from 'react';
import ReactDOM from 'react-dom';

import { fetchEvents, fetchEvent, createEvent, updateEvent, deleteEvent } from './util/events_api_util'
import { fetchAttendees, createAttendee, deleteAttendee } from './util/attendees_api_util'
import { searchEntities } from './util/search_api_util';

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
    window.fetchEvents = fetchEvents;
    window.fetchEvent = fetchEvent;
    window.createEvent = createEvent;
    window.updateEvent = updateEvent;
    window.deleteEvent = deleteEvent;
    window.fetchAttendees = fetchAttendees;
    window.createAttendee = createAttendee;
    window.deleteAttendee = deleteAttendee;
    window.searchEntities = searchEntities;
    // FOR TESTING

    ReactDOM.render(<Root store={store}/>, root);
})