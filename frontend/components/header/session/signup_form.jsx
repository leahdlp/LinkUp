import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            username: "",
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
            <div className={klass}>
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
                <p>{feedback}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="signup-form">
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label className="user-input"> First Name:
                        <br />
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                        />
                    </label>
                    <br />
                    <label className="user-input"> Last Name:
                        <br />
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                        />
                    </label>
                    <br />
                    <label className="user-input"> Email address:
                        <br />
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br />
                    <label className="user-input"> Username (optional): 
                        <br />
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
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

export default SignUpForm;