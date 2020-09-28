import React from 'react';
import { Link } from 'react-router-dom'

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.event;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    update(field) {
        return () => this.setState({ [field]: event.target.value })
    }

    handleSubmit() {
        event => event.preventDefault();

        const event = Object.assign({}, this.state);
        event.location_id = parseInt(event.location_id);
        event.group_id = parseInt(event.group_id);

        this.props.processForm(event)
            .then(action => this.props.history.push(`/events/${action.event.id}`))

    }

    handleCancel() {
        this.props.history.goBack();
    }

    renderErrors() {
        let errors = this.props.errors;
        let klass = "";
        let feedback = "";
        if (errors.length !== 0) klass = "errors";

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
                <br/>
                <p id="header-msg">
                    Want to update an existing event?
                    <Link to={`/groups/${this.state.group_id}`} className="other-link">
                        View Group Events
                    </Link>
                </p>
            </div>
        )
    }

    renderForm() {
        let currentLoc = this.state.location_id || "default";

        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="inputs">
                        <label className="user-input"> Name:
                            <br />
                            <input 
                                type="text" 
                                defaultValue={this.state.name} 
                                onChange={this.update("name")} 
                            />
                        </label>
                        <br />
                        <label className="user-input"> Description:
                            <br />
                            <textarea 
                                defaultValue={this.state.description} 
                                cols="50" rows="10" 
                                onChange={this.update("description")}
                            />
                        </label>
                        <br />
                        <label className="user-input"> Date and Time:
                            <br />
                            <input 
                                type="datetime-local" 
                                value={this.state.date_time}
                                onChange={this.update("date_time")}
                            />
                        </label>
                        <br />
                        <label className="user-input"> Location:
                                    <br />
                            <select
                                className="drop-select"
                                defaultValue={currentLoc}
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
                        <br/>
                        <div className="form-submit-btn-container">
                            <div className="form-submit-btn">
                                <input type="submit" value={this.props.formType} />
                            </div>
                            <button onClick={() => this.handleCancel()}>
                                cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    render () {
        // if (this.props.event === undefined) return null;

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

export default EventForm;