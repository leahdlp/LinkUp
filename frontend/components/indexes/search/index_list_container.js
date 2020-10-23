import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import { searchEntities } from '../../../actions/search_actions';
import { fetchGroup } from "../../../actions/groups_actions";
import { fetchAttendee } from '../../../actions/attendees_actions';
import { fetchMember } from '../../../actions/members_actions';


import IndexList from "./index_list";

const mapStateToProps = state => ({
    events: state.entities.events,
    groups: state.entities.groups
});

const mapDispatchToProps = dispatch => ({
    searchEntities: keyword => dispatch(searchEntities(keyword)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    fetchAttendee: attendeeId => dispatch(fetchAttendee(attendeeId)),
    fetchMember: memberId => dispatch(fetchMember(memberId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexList));
