import { connect } from 'react-redux';

import { signup, clearErrors } from '../../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign up'
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)