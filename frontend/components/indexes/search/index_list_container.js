import { connect } from "react-redux";

import { fetchEvents } from "../../../actions/events_actions";
import { fetchGroups } from "../../../actions/groups_actions";
import { fetchSubcategories } from "../../../actions/subcategories_actions";

import IndexList from "./index_list";

const mapStateToProps = (state, ownProps) => ({
  keyword: ownProps.match.params.keyword,
  events: state.entities.events,
  groups: state.entities.groups,
  subcategories: state.entities.subCategories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchGroups: () => dispatch(fetchGroups()),
  fetchSubcategories: () => dispatch(fetchSubcategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexList);
