import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class GroupEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleCancel.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.currentTarget.value })
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push(`/groups/${this.props.group.id}`);
    }

    handleSubmit(event) {
        event.preventDefault();
        const group = Object.assign({}, this.state);
        this.props.processForm(group);
    }


    renderErrors() {
        let errors = this.props.errors;
        let klass = "";
        let feedback = "";
        if (errors.length != 0) klass = "errors";

        return (
            <div className="errors-container">
                <div className={klass}>
                    <ul>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>{error}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    renderHeader() {
        return (
            <div className="update-group-form-header">
                <div className="form-type">
                    <h2>{this.props.formType}</h2>
                </div>
                <br />
                <p id="header-msg">
                    Want to create a new group?
                                    <Link
                        className="other-link"
                        to="/groups/new"
                    >
                        Create Group
                                    </Link>
                </p>
            </div>
        )
    }

    renderForm() {
        return (
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
                            <button onClick={() => this.handleCancel()}>
                                Cancel
                                            </button>
                        </div>
                    </div>
                </form>
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
                <div className="update-group-page">
                    <div className="update-group-form">
                        {this.renderForm()}
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupEditForm;