import React from 'react';
import { Link } from 'react-router-dom'

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.event;

        this.handleSubmit.bind(this);
        // this.handleCancel.bind(this);
    }

    componentDidMount() {
        // this.props.fetchEvent(this.props.event.id);
    }
    
    update(field) {
        () => this.setState({ [field]: event.currentTarget.value })
    }

    handleSubmit() {
        event.preventDefault();
        this.props.createEvent(this.state)
            .then(event => this.history.push(`/events/${event.id}`))
    }

    render() {
        return (
            <div>
                <label> Name:
                    <input type="text" value={this.state.name} />
                </label>

                <label> Description:
                    <textarea value={this.state.description} cols="30" rows="10" />
                </label>

                <label> Date and Time:
                    <input type="datetime-local" />
                </label>
                <label> Location:
                    <input type="text" />
                </label>
                
                {/* <input type="submit" value={formType} /> */}
            </div>
        )
    }
}

export default EventForm;