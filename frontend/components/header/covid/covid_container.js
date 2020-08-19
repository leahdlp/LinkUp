import { connect } from 'react-redux';
// import { signup, login, logout } from '../../../actions/session_actions';

import CovidBar from '../covid/covidbar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
//     signup: user => dispatch(signup(user)),
//     login: user => dispatch(login(user)),
//     logout: () => dispatch(logout())
// })

export default connect(mapStateToProps, null)(CovidBar);