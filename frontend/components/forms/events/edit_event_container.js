import { connect } from 'react-redux';
import React from 'react';

import { fetchEvent, updateEvent, clearEventErrors } from '../../../actions/events_actions';
import { fetchLocations } from '../../../actions/locations_actions';

import EntityForm from '../entity_form';

class UpdateEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
        this.props.fetchLocations();
    }

    componentWillUnmount() {
        this.props.clearEventErrors();
    }

    render() {
        if (this.props.event === undefined) return null;
        if (this.props.locations === undefined) return null;

        return (
            <EntityForm
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
    entity: state.entities.events[ownProps.match.params.eventId],
    formType: 'Update Event',
    errors: state.errors.events,
    locations: state.entities.locations
})

const mapDispatchToProps = dispatch => ({
    processForm: event => dispatch(updateEvent(event)),
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    fetchLocations: () => dispatch(fetchLocations()),
    clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm)