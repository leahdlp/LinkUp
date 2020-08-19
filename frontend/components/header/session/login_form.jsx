import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);

        this.state = {email: "", password: ""}
    }

    handleDemoUser(event) {
        const user = { email: "thanAMug@gmail.com", password: "0123456789" };
        this.props.processForm(user);
        // this.props.history.push("/");
    }

    renderErrors() {
        let errors = this.props.errors;
        let klass = "";
        let feedback = "";
        if (errors.length != 0) klass = "errors";
        if (errors.includes("Your email or password was entered incorrectly.")) {
            feedback = "To reset your password, please click here";
        }

        return (
            <div className="errors-container">
                <div className={klass}>
                    <ul>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>{error}</li>
                        ))}
                    </ul>
                    <p>{feedback}</p>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render () {
        return(
            <div>

                { this.renderErrors() }
        
                <div className="login-page">
                    <div className="login-form">
                        <div className="form-header">
                            <div className="form-type">
                                <h2>{this.props.formType}</h2>
                            </div>
                            <br />
                            <p id="header-msg">
                                Not registered with us yet?
                                <Link className="other-link" to="/signup">Sign up</Link>
                            </p>
                        </div>

                        <div className="form-container">
                            <form onSubmit={this.handleSubmit} className="form">
                                <div className="inputs">
                                    <label className="user-input"> Email address:
                                        <br />
                                        <input 
                                            type="text" 
                                            value={this.state.email}
                                            onChange={this.update("email")}
                                        />
                                    </label>
                                    <br />
                                    <label className="user-input"> Password:
                                        <br />
                                        <input
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.update("password")}
                                        />
                                    </label>
                                </div>
                                <br />
                                <div className="form-submit-btn-container">
                                    <div className="form-submit-btn">
                                        <input 
                                            type="submit" 
                                            value={this.props.formType}
                                        />
                                        <br />
                                        <button onClick={() => this.handleDemoUser()}>
                                            Log In as Demo User
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInForm;