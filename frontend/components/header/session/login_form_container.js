import { connect } from 'react-redux';

import { login } from '../../../actions/session_actions';
import LogInForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Log in'
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm)