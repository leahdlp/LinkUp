import { connect } from 'react-redux';
import React from 'react';

import { createEvent, clearEventErrors } from '../../../actions/events_actions';
import { fetchLocations } from '../../../actions/locations_actions';

import EventForm from './event_form';

class CreateEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchLocations();
    }

    componentWillUnmount() {
        this.props.clearEventErrors();
    }

    render () {
        if (this.props.locations === undefined) return null;

        return (
            <EventForm 
                event={this.props.event}
                formType={this.props.formType}
                errors={this.props.errors}
                locations={this.props.locations}
                history={this.props.history}
                processForm={this.props.processForm}
            />
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    event: { 
        name: "", 
        description: "", 
        group_id: ownProps.match.params.groupId, 
        date_time: 0, 
        location_id: 0 
    },
    forType: 'Create Event',
    errors: state.errors.events,
    locations: state.entities.locations
})

const mapDispatchToProps = dispatch => ({
    processForm: event => dispatch(createEvent(event)),
    fetchLocations: () => dispatch(fetchLocations()),
    clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)