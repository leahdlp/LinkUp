import { connect } from "react-redux";

import { searchEntities } from '../../../actions/search_actions';
import { fetchGroup } from "../../../actions/groups_actions";


import IndexList from "./index_list";

const mapStateToProps = (state, ownProps) => ({
    keyword: ownProps.match.params.keyword,
    events: state.entities.events,
    groups: state.entities.groups
});

const mapDispatchToProps = dispatch => ({
    searchEntities: keyword => dispatch(searchEntities(keyword)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);
