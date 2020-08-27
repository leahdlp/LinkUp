import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class GroupCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.group;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return () => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const group = Object.assign({}, this.state);

        group.location_id = parseInt(group.location_id);
        group.subcategory_id = parseInt(group.subcategory_id);

        this.props.processForm(group)
            .then(action => this.props.history.push(`/groups/${action.group.id}`))
    }

    handleCancel(event) {
        this.props.history.goBack();
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
        let currentLoc = this.state.location_id || "default";
        let currentCat = this.state.subcategory_id || "default"

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
                            <textarea
                                rows="10"
                                cols="50"
                                type="text"
                                value={this.state.description}
                                onChange={this.update("description")}
                            />
                        </label>
                        <br />
                        <label className="user-input"> Location:
                            <br />
                            <select 
                                value={currentLoc}
                                onChange={this.update("location_id")}>

                                <option disabled value="default">
                                    -- Please Select --
                                </option>

                                {Object.values(this.props.locations).map(location => (
                                    <option 
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
                                value={currentCat}
                                onChange={this.update("subcategory_id")}>

                                <option disabled value="default">
                                    -- Please Select --
                                </option>

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
                        </div>
                        <button onClick={() => this.handleCancel()}>
                            cancel
                        </button>
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