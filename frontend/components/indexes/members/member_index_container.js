import { connect } from "react-redux";
import { fetchMembers } from "../../../actions/members_actions";
import { fetchGroup } from "../../../actions/groups_actions";
import MembersIndex from "./member_index";

const mapStateToProps = (state, ownProps) => ({
  groupId: ownProps.match.params.groupId,
  group: state.entities.groups[ownProps.match.params.groupId],
  members: Object.values(state.entities.members),
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
  fetchMembers: (groupId) => dispatch(fetchMembers(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersIndex);
