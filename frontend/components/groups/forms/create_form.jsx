import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            subcategory_id: 0,
            location_id: 0,
            creator_id: 0
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

    handleDemoUser(event) {
        const id = Math.floor(Math.random() * 100000000000000000);
        const user = {
            name: "Teddy Pendergrass",
            email: `user${id}@newUser.com`,
            password: "0123456789"
        };

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

    render() {
        return (
            <div>

                {this.renderErrors()}

                <div className="signup-page">
                    <div className="signup-form">
                        <div className="form-header">
                            <div className="form-type">
                                <h2>{this.props.formType}</h2>
                            </div>
                            <br />
                            <p id="header-msg">
                                Already registered with us?
                                <Link className="other-link" to="/login">Log in</Link>
                            </p>
                        </div>

                        <div className="form-container">
                            <form onSubmit={this.handleSubmit} className="form">
                                <div className="inputs">
                                    <label className="user-input"> Your Name:
                                        <br />
                                        <input
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.update("name")}
                                        />
                                    </label>
                                    <br />
                                    <label className="user-input"> Email address:
                                        <br />
                                        <input
                                            type="text"
                                            value={this.state.description}
                                            onChange={this.update("description")}
                                        />
                                    </label>
                                    <br />
                                    <label className="user-input"> Category:
                                        <br />
                                        {/* <input
                                            type="password"
                                            value={this.state.creator_id}
                                            onChange={this.update("creator_id")}
                                        /> */}
                                        <select name="group[subcategory_id]">
                                            <option disabled>-- Please Select --</option>
                                            <option value={this.state.subcategory_id}>
                                                
                                            </option>

                                        </select>
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
                                            Sign Up as Demo User
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

export default SignUpForm;