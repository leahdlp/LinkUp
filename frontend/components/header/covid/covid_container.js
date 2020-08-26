import { connect } from 'react-redux';

import CovidBar from '../covid/covidbar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})


export default connect(mapStateToProps, null)(CovidBar);