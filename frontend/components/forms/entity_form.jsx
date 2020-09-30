import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class EntityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.entity;

        console.log(this.props.formType)
        this.entity = this.props.formType.split(" ").includes("Group")
          ? "Group"
          : "Event"; 

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleCancel = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderDateTime = this.renderDateTime.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    update(field) {
        return () => this.setState({ [field]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let entity = Object.assign({}, this.state);

        entity.location_id = parseInt(entity.location_id);
        entity.subcategory_id = parseInt(entity.subcategory_id);

        this.props.processForm(entity)
            .then(action => {
              if (this.entity === "Group") {
                this.props.history.push(
                  `/${this.entity.toLowerCase()}s/${action.group.id}`
                );
              } else if (this.entity === "Event") {
                this.props.history.push(
                  `/${this.entity.toLowerCase()}s/${action.event.id}`
                );
              }
            })
    }

    handleCancel(event) {
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

    renderDateTime() {
      if (this.entity === "Group") {
        return null
      } else {
        return (
          <label className="user-input"> Date and Time:
              <br />
              <input 
                  type="datetime-local" 
                  value={this.state.date_time}
                  onChange={this.update("date_time")}
              />
          </label>
        )
      }
    }

    renderHeader() {
      let fillWord = this.entity === "Group" ? " " : " Group "
      let other_link = this.entity === "Group" ? "/" : `${this.props.groupId}`
      console.log(other_link)

        return (
          <div className="group-form-header">
            <div className="form-type">
              <h2>{this.props.formType}</h2>
            </div>
            <br />
            <p id="header-msg">
              Want to update an existing {this.entity.toLowerCase()}?
              <Link className="other-link" to={other_link}>
                View{fillWord}{this.entity}s
              </Link>
            </p>
          </div>
        );
    }  

    renderForm() {
        let currentLoc = this.state.location_id || "default";
        let currentCat = this.state.subcategory_id || "default";

        let label = this.entity === "Group" ? "Description" : "Details";

        return (
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="inputs">
                <label className="user-input">
                  {/* {" "} */}
                  Name:
                  <br />
                  <input
                    type="text"
                    defaultValue={this.state.name}
                    onChange={this.update("name")}
                  />
                </label>
                <br />
                <label className="user-input">
                  {/* {" "} */}
                  {label}:
                  <br />
                  <textarea
                    type="text"
                    defaultValue={this.state.description}
                    onChange={this.update("description")}
                  />
                </label>
                <br />
                  {this.renderDateTime()}
                <br />
                <label className="user-input">
                  {/* {" "} */}
                  Location:
                  <br />
                  <select
                    className="drop-select"
                    defaultValue={currentLoc}
                    onChange={this.update("location_id")}
                  >
                    <option disabled value="default">
                      -- Please Select --
                    </option>

                    {Object.values(this.props.locations).map((location) => (
                      <option
                        value={location.id}
                        key={`location-${location.id}`}
                      >
                        {location.city}, {location.state}
                      </option>
                    ))}
                  </select>
                </label>

                <br />

                <label className="user-input">
                  {/* {" "} */}
                  Categories:
                  <br />
                  <select
                    className="drop-select"
                    defaultValue={currentCat}
                    onChange={this.update("subcategory_id")}
                  >
                    <option disabled value="default">
                      -- Please Select --
                    </option>

                    {Object.values(this.props.subcategories).map(
                      (subcategory) => (
                        <option
                          value={subcategory.id}
                          key={`subcat-${subcategory.id}`}
                        >
                          {subcategory.name}
                        </option>
                      )
                    )}
                  </select>
                </label>
              </div>
              <br />
              <div className="form-submit-btn-container">
                <div className="form-submit-btn">
                  <input type="submit" value={this.props.formType} />
                  <br />
                </div>
                <button 
                    onClick={() => this.handleCancel()}
                    className="cancel-btn">
                    cancel
                </button>
              </div>
            </form>
          </div>
        );
    }

    render() {
        if (this.props.entity === undefined) return null;
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

export default EntityForm;