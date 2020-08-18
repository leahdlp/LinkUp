import React from 'react';
import { Redirect } from 'react-router-dom';

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

    render () {
        return(
            <div className="login-form">
                <ul className="errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label> Email
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br />
                    <label> Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    <br />
                    <input 
                        type="submit" 
                        value={this.props.formType}
                        className="form-submit-btn"
                    />
                </form>
            </div>
        )
    }
}

export default LogInForm;