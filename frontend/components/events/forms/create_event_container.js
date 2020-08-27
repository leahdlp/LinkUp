import { connect } from 'react-redux';

import { createEvent } from '../../../actions/events_actions';
import { fetchLocations } from '../../../actions/locations_actions';
// import { fetchAttendees } from '../../../actions/attendees_actions';

import EventForm from './event_form';

const mapStateToProps = state => ({
    event: { 
        name: "", 
        description: "", 
        group_id: 0, 
        date_time: 0, 
        location_id: 0 
    }
})

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event)),
    fetchLocations: () => dispatch(fetchLocations()),
    // fetchAttendees: () => 
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)