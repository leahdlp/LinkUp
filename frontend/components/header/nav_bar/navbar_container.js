import { connect } from 'react-redux';

import { setKeyword } from '../../../actions/keyword_action';
import { logout } from '../../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    setKeyword: keyword => dispatch(setKeyword(keyword))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);