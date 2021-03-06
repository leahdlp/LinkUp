import React from 'react';

class EventBar extends React.Component {
    constructor(props) {
        super(props);

        this.attendanceButton = this.attendanceButton.bind(this);
        this.eventButtons = this.eventButtons.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.convertDate = this.convertDate.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.convertDateTime = this.convertDateTime.bind(this);
    }


    attendanceButton(event) {
        const attendees = this.props.attendees;
        let button;

        for (let id in attendees) {
            if (this.props.currentUser &&
                attendees[id].user_id === this.props.currentUser.id) {
                return (
                    <div className="event-pink-btn">
                        <button 
                            onClick={() => this.props.deleteAttendee(id)}>
                            Leave Event
                        </button>
                    </div>
                )
            }
        }

        return (
            <div className="event-pink-btn">
                <button
                    onClick={() => { 
                        if (this.props.currentUser) {
                            this.props.createAttendee({
                                event_id: event.id,
                                user_id: this.props.currentUser.id
                            })
                        } else {
                            this.props.history.push('/login')
                        }
                    }}>
                    Join Event
                </button>
            </div>
        );
    }

    eventButtons(event) {
        return (
            <div id="edit-event" className="event-pink-btn">
                <button onClick={() => this.props.history.push(`/events/${event.id}/edit`)}>
                    Edit Event
                </button>
                <button id="delete-event" onClick={() => {
                    this.props.deleteEvent(event.id);
                    this.props.history.push("/");
                }}>
                    Delete Event
                </button>
            </div>
        )
    }

    renderButtons(event) {
        let isHost = false;
        const attendees = this.props.attendees
        const group = this.props.group;
        const creator = group.creator_id;
        const currentUser = this.props.currentUser.id;

        for (let id in attendees) {
            const attendee = attendees[id];
            if (attendee.user_id === currentUser && currentUser === creator) isHost = true;
        }

        if (isHost) {
            return this.eventButtons(event)
        } else {
            return this.attendanceButton(event)
        }
    }

    convertDate(date) {
        const ymd = date.split('-');
        const year = ymd[0];
        let month = ymd[1];
        const day = ymd[2];

        switch (month) {
            case "01":
                month = 'Jan';
                break;
            case "02":
                month = 'Feb';
                break;
            case "03":
                month = 'Mar';
                break;
            case "04":
                month = 'Apr';
                break;
            case "05":
                month = 'May';
                break;
            case "06":
                month = 'Jun';
                break;
            case "07":
                month = 'Jul';
                break;
            case "08":
                month = 'Aug';
                break;
            case "09":
                month = 'Sep';
                break;
            case "10":
                month = 'Oct';
                break;
            case "11":
                month = 'Nov';
                break;
            case "12":
                month = 'Dec';
                break;
            default:
                break;
        }

        if (year === '2020') {
            return `${month} ${day}`
        } else {
            return `${month} ${day}, ${year}`;
        }
    }

    convertTime(time) {
        const hms = time.split(":");
        let hour = hms[0];
        const min = hms[1];
        let AMPM = 'AM';

        switch (hour) {
            case "13":
                hour = "01";
                AMPM = 'PM';
                break;
            case "14":
                hour = "02";
                AMPM = 'PM';
                break;
            case "15":
                hour = "03";
                AMPM = 'PM';
                break;
            case "16":
                hour = "04";
                AMPM = 'PM';
                break;
            case "17":
                hour = "05";
                AMPM = 'PM';
                break;
            case "18":
                hour = "06";
                AMPM = 'PM';
                break;
            case "19":
                hour = "07";
                AMPM = 'PM';
                break;
            case "20":
                hour = "08";
                AMPM = 'PM';
                break;
            case "21":
                hour = "09";
                AMPM = 'PM';
                break;
            case "22":
                hour = "10";
                AMPM = 'PM';
                break;
            case "23":
                hour = "11";
                AMPM = 'PM';
                break;
            case "00":
                hour = "12";
                AMPM = 'AM';
                break;
            default:
                break;
        }

        hour = hour.split('');

        if (hour[0] === "0") {
          hour = hour[1];
        } else {
          hour = hour.join("");
        }

        return `${hour}:${min} ${AMPM}`;
    }

    convertDateTime(date_time) {
        const dt_arr = date_time.split('T');
        const date = dt_arr[0];
        const time = dt_arr[1];

        return (
          <h3>
            {this.convertDate(date)}    {this.convertTime(time)}
          </h3>
        );
    }

    render() {
        const event = this.props.event;

        if (Object.values(this.props.attendees).length === 0) return null;
        if (event === undefined) return null;


        return (
            <div className="event-bar">
                <div className="event-bar-info">
                    {this.convertDateTime(event.date_time)}
                    <h1>{event.name}</h1>
                </div>
                <div className="event-bar-right">
                    <p>FREE</p>
                    {this.renderButtons(event)}
                </div>
            </div>
        )
    }
}

export default EventBar;