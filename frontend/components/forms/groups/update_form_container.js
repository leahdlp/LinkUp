import { connect } from 'react-redux';
import React from 'react';

import { updateGroup, fetchGroup, clearGroupErrors } from '../../../actions/groups_actions';
import { fetchLocations } from '../../../actions/locations_actions';
import { fetchSubcategories } from '../../../actions/subcategories_actions';

import EntityForm from '../entity_form';

class GroupEditForm extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.match.params.groupId);
        this.props.fetchLocations();
        this.props.fetchSubcategories();
    }

    componentWillUnmount() {
        this.props.clearGroupErrors();
    }

    render() {
        const locations = this.props.locations;
        const subcategories = this.props.subcategories;
        if (this.props.group === undefined) return null;
        if (locations === undefined || subcategories === undefined) return null;
        return (
            <EntityForm 
                history={this.props.history}
                processForm={this.props.processForm}
                errors={this.props.errors}
                formType={this.props.formType}
                group={this.props.group}
                locations={this.props.locations}
                subcategories={this.props.subcategories}
                creator={this.props.creator}
            />
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.groups,
    formType: 'Update Group',
    entity: state.entities.groups[ownProps.match.params.groupId],
    locations: state.entities.locations,
    subcategories: state.entities.subCategories,
    creator: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchLocations: () => dispatch(fetchLocations()),
    fetchSubcategories: () => dispatch(fetchSubcategories()),
    processForm: group => dispatch(updateGroup(group)),
    clearGroupErrors: () => dispatch(clearGroupErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupEditForm);