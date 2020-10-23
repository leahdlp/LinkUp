import { connect } from 'react-redux';
import React from 'react';

import { createEvent, clearEventErrors } from '../../../actions/events_actions';
import { fetchLocations } from '../../../actions/locations_actions';
import { fetchSubcategories } from '../../../actions/subcategories_actions';

import EntityForm from '../entity_form';

class CreateEventForm extends React.Component {
    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchSubcategories();
    }

    componentWillUnmount() {
        this.props.clearEventErrors();
    }

    render () {
        const locations = this.props.locations;
        const subcategories = this.props.subcategories;

        if (locations === undefined || subcategories === undefined) return null;
        return (
            <EntityForm 
                entity={this.props.entity}
                formType={this.props.formType}
                errors={this.props.errors}
                locations={locations}
                subcategories={subcategories}
                history={this.props.history}
                processForm={this.props.processForm}
            />
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    entity: { 
        name: "", 
        description: "", 
        group_id: ownProps.match.params.groupId, 
        date_time: 0, 
        location_id: 0,
        photo: null,
        photoUrl: null
    },
    formType: 'Create Event',
    errors: state.errors.events,
    locations: state.entities.locations,
    subcategories: state.entities.subCategories,
    creator: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    processForm: event => dispatch(createEvent(event)),
    fetchLocations: () => dispatch(fetchLocations()),
    fetchSubcategories: () => dispatch(fetchSubcategories()),
    clearEventErrors: () => dispatch(clearEventErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)