import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Background from './form_background';

class EntityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.entity;

        this.entity = this.props.formType.split(" ").includes("Group")
          ? "Group"
          : "Event"; 

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
        this.renderDateTime = this.renderDateTime.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    update(field) {
        return () => this.setState({ [field]: event.target.value })
    }

    handleFile(event) {
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let entity = Object.assign({}, this.state);

        entity.location_id = parseInt(entity.location_id);
        entity.subcategory_id = parseInt(entity.subcategory_id);

        const formData = new FormData();

        for (let key in entity) {
            if (key === "photoUrl") continue;
            if (key === "photo" && !this.state.photo) continue;

            if (key === "photoFile") {
              formData.append(`${this.entity.toLowerCase()}[photo]`, entity[key])
            } else {
              formData.append(`${this.entity.toLowerCase()}[${key}]`, entity[key])
            }
        }

        this.props.processForm(formData)
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

    renderCategories() {
      let currentCat = this.state.subcategory_id || "default";
      if (this.entity === "Event") return null;

      return (
        <label className="user-input">
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

            {Object.values(this.props.subcategories).map((subcategory) => (
              <option value={subcategory.id} key={`subcat-${subcategory.id}`}>
                {subcategory.name}
              </option>
            ))}
          </select>
        </label>
      );
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

        return (
          <div className="entity-form-header">
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

        let label = this.entity === "Group" ? "Description" : "Details";
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null

        return (
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="inputs">
                <label className="user-input">
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

                {this.renderCategories()}

                <br/>
                <label className="photo-input"> {this.entity} Picture:
                  <br/>
                  <br/>
                  <input 
                    type="file"
                    onChange={this.handleFile}
                    className="upload-photo"
                  />
                  {preview}
                </label>
              </div>
              <br />
              <div className="form-btns-container">
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
            <div className="entire-entity-page">
                <div className="background-container">
                    <Background
                      renderErrors={this.renderErrors}
                      renderHeader={this.renderHeader}
                      renderForm={this.renderForm}
                    />
                </div>
            </div>
        )
    }
}

export default EntityForm;