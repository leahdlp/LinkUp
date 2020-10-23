import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            photo: null,
            photoUrl: null
        }

        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return event => this.setState({ [field]: event.currentTarget.value })
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
        const user = Object.assign({}, this.state);

        const formData = new FormData();

        for (let key in user) {
            if (key === "photoUrl") continue;
            if (key === "photo" && !this.state.photo) continue;

            if (key === "photoFile") {
              formData.append(`user[photo]`, user[key])
            } else {
              formData.append(`user[${key}]`, user[key])
            }
        }
        this.props.processForm(formData);
    }

    handleDemoUser(event) {
        const id = Math.floor(Math.random() * 100000000000000000);
        const user = { 
            name: "Teddy Pendergrass", 
            email: `user${id}@newUser.com`, 
            password: "0123456789" 
        };
        
        this.props.processForm(user);
    }

    renderErrors() {
        let errors = this.props.errors;
        let klass = "";
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

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const preview = this.state.photoUrl ? (
            <img src={this.state.photoUrl} />
            ) : null;

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
                                            value={this.state.email}
                                            onChange={this.update("email")}
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
                                     <br/>
                                    <label className="photo-input"> Profile Picture:
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
                                <div className="pink-btn-container">
                                    <div className="pink-btn">
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