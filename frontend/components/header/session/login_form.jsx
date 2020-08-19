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
        // <Redirect />
    }

    handleDemoUser(event) {
        const user = { email: "thanAMug@gmail.com", password: "0123456789" };
        this.props.processForm(user);
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

    render () {
        return(
            <div className="login-page">
                { this.renderErrors() }

                <div className="form-header">
                    <div className="form-type">
                        <h2>{this.props.formType}</h2>
                    </div>
                    <br />
                    <p id="signin-msg">
                        Not registered with us yet?
                        <Link to="/signup">Sign up</Link>
                    </p>
                    
                </div>

                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
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
                        <br />
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
                    </form>
                </div>
            </div>
        )
    }
}

export default LogInForm;