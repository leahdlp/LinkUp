import { connect } from 'react-redux';
import React from 'react';

import { createGroup, clearGroupErrors } from '../../../actions/groups_actions';
import { fetchSubcategories } from '../../../actions/subcategories_actions';
import { fetchLocations } from '../../../actions/locations_actions';

import EntityForm from '../entity_form';


class GroupCreateForm extends React.Component {
    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchSubcategories();
    }

    componentWillUnmount() {
        this.props.clearGroupErrors();
    }

    render() {
        const locations = this.props.locations;
        const subcategories = this.props.subcategories;

        if (locations === undefined || subcategories === undefined) return null;
        return (
            <EntityForm
                history={this.props.history}
                processForm={this.props.processForm}
                errors={this.props.errors}
                formType={this.props.formType}
                entity={this.props.entity}
                locations={this.props.locations}
                subcategories={this.props.subcategories}
                creator={this.props.creator}
                groupId={this.props.groupId}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.groups,
    formType: 'Create Group',
    entity: {
        name: "",
        description: "",
        subcategory_id: 0,
        location_id: 0,
        creator_id: state.session.id
    },
    locations: state.entities.locations,
    subcategories: state.entities.subCategories,
    creator: state.entities.users[state.session.id],
    groupId: ownProps.match.params.groupId
})

const mapDispatchToProps = dispatch => ({
    fetchLocations: () => dispatch(fetchLocations()),
    fetchSubcategories: () => dispatch(fetchSubcategories()),
    processForm: group => dispatch(createGroup(group)),
    clearGroupErrors: () => dispatch(clearGroupErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreateForm)