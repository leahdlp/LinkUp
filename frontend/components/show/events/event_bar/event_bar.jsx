import React from 'react';

class EventBar extends React.Component {
    constructor(props) {
        super(props);

        this.event = this.props.event;
        this.attendees = this.props.attendees;

        this.eventButton = this.eventButton.bind(this);
    }

    eventButton() {
        let button;
        for (let id in attendees) {
            if (this.props.currentUser &&
                this.attendees[id].user_id === this.props.currentUser.id) {
                return (
                    button = <button onClick={() => this.props.deleteAttendee}>
                        Leave Event
                    </button>
                )
            }
        }

        return ( 
            button = <button onClick={() => this.props.createAttendee}>
                Join Event
            </button>
        )
    }

    render() {
        if (Object.values(this.attendees).length === 0) return null;
        return this.eventButton();
    }
}

export default EventBar;