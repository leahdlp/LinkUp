import React from 'react';

class EventShowHeader extends React.Component {
    constructor(props) {
        super(props);

        this.convertDate = this.convertDate.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    convertDate(date) {
        const ymd = date.split("-");
        const year = ymd[0];
        let month = ymd[1];
        const day = ymd[2];

        switch (month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            break;
        }

        return `${month} ${day}, ${year}`;
    }

    formatDate(date_time) {
        const dt_arr = date_time.split("T");
        const date = dt_arr[0];

        return <h3 id="header-date">{this.convertDate(date)}</h3>
    }

    render() {
        const location = this.props.location;
        const event = this.props.event;
        const host = this.props.host;

        if (location === undefined) return null;

        return (
        <div className="event-show-header-container">
            <div className="event-show-header">
                {this.formatDate(event.date_time)}
                <h1>{event.name}</h1>
                <p>
                    {location.city}, {location.state}
                </p>
                <div className="event-host">
                    <div className="host-img"></div>
                    <div className="host-info">
                        <p> Hosted by</p>
                        <p id="host">{host}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default EventShowHeader;