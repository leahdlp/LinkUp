import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class GroupCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group;

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDemoUser = this.handle.bind(this);
    }

    update(field) {
        console.log(event);
        console.log(event.currentTarget)
        // console.log(this.state)
        console.log(event.currentTarget.value)
        return event => this.setState({ [field]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleCancel(event) {
        console.log(this.props)
        this.props.history.push(`/groups/${this.props.group.id}/edit`)
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
        // console.log(group)
        return (
            <div className="group-form-header">
                <div className="form-type">
                    <h2>{this.props.formType}</h2>
                </div>
                <br />
                <p id="header-msg">
                    Want to update an existing group?
                    <Link
                        className="other-link"
                        to="/"
                    >
                        View Groups
                    </Link>
                </p>
            </div>
        )
    }  

    renderForm() {
        // debugger
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="inputs">
                        <label className="user-input"> Group Name:
                            <br />
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update("name")}
                            />
                        </label>
                        <br /> 
                        <label className="user-input"> Description:
                            <br />
                            <input
                                type="text"
                                value={this.state.description}
                                onChange={this.update("description")}
                            />
                        </label>
                        <br />
                        <label className="user-input"> Location:
                            <br />
                            <select 
                                name="group[location_id]"
                                // value={this.state.location_id}
                                onChange={() => this.update("location_id")}>
                                >
                                <option selected disabled>-- Please Select --</option>

                                {Object.values(this.props.locations).map(location => (
                                    <option 
                                        // onSelect={() => this.update("location_id")}
                                        value={location.id}
                                        key={`location-${location.id}`}>
                                        {location.city}, {location.state}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <label className="user-input"> Categories:
                            <br />
                            <select
                                // name="group[subcategory_id]"
                                // value={this.state.subcategory_id}
                                onChange={() => this.update("subcategory_id")}>
                                <option selected disabled>-- Please Select --</option>

                                {Object.values(this.props.subcategories).map(subcategory => (
                                    <option
                                        value={subcategory.id}
                                        key={`subcat-${subcategory.id}`}>
                                        {subcategory.name}
                                    </option>
                                ))}
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
                                cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        if (this.props.group === undefined) return null;
        return (
            <div>
                {this.renderErrors()}
                <div className="group-page">
                    <div className="group-form-container">
                        {this.renderHeader()}
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupCreateForm;