import { connect } from 'react-redux';

import { logout } from '../../../actions/session_actions';
import { setKeyword } from '../../../actions/keyword_action';
import { searchEntities, clearSearch } from '../../../actions/search_actions';

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    groups: state.entities.groups,
    events: state.entities.events,
    keyword: ownProps.match.params.keyword,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    setKeyword: keyword => dispatch(setKeyword(keyword)),
    searchEntities: keyword => dispatch(searchEntities(keyword)),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);