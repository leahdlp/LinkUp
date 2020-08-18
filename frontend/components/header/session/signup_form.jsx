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

    render() {
        return (
            <div className="signup-form">
                <ul className="errors"> 
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label> First Name
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                        />
                    </label>
                    <br />
                    <label> Last Name
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                        />
                    </label>
                    <br />
                    <label> Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <br />
                    <label> Username (optional)
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update("username")}
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

export default SignUpForm;