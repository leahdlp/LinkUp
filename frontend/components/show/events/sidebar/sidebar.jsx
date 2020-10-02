import React from "react";

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.eventButton = this.eventButton.bind(this);
    this.convertDate = this.convertDate.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.convertDateTime = this.convertDateTime.bind(this);
  }

  eventButton() {
    const attendees = this.props.attendees;
    let button;

    for (let id in attendees) {
      if (
        this.props.currentUser &&
        attendees[id].user_id === this.props.currentUser.id
      ) {
        return (
          <div className="pink-btn">
            <button onClick={() => this.props.deleteAttendee}>
              Leave Event
            </button>
          </div>
        );
      }
    }

    return (
      <div className="pink-btn">
        <button onClick={() => this.props.createAttendee} className="pink-btn">
          Join Event
        </button>
      </div>
    );
  }

  convertDate(date) {
    const ymd = date.split("-");
    const year = ymd[0];
    let month = ymd[1];
    const day = ymd[2];

    switch (month) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "Mar";
        break;
      case "04":
        month = "Apr";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "Jun";
        break;
      case "07":
        month = "Jul";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;
      default:
        break;
    }

    if (year === "2020") {
      return `${month} ${day}`;
    } else {
      return `${month} ${day}, ${year}`;
    }
  }

  convertTime(time) {
    const hms = time.split(":");
    let hour = hms[0];
    const min = hms[1];
    let AMPM = "AM";

    switch (hour) {
      case "13":
        hour = "01";
        AMPM = "PM";
        break;
      case "14":
        hour = "02";
        AMPM = "PM";
        break;
      case "15":
        hour = "03";
        AMPM = "PM";
        break;
      case "16":
        hour = "04";
        AMPM = "PM";
        break;
      case "17":
        hour = "05";
        AMPM = "PM";
        break;
      case "18":
        hour = "06";
        AMPM = "PM";
        break;
      case "19":
        hour = "07";
        AMPM = "PM";
        break;
      case "20":
        hour = "08";
        AMPM = "PM";
        break;
      case "21":
        hour = "09";
        AMPM = "PM";
        break;
      case "22":
        hour = "10";
        AMPM = "PM";
        break;
      case "23":
        hour = "11";
        AMPM = "PM";
        break;
      case "24":
        hour = "12";
        AMPM = "PM";
        break;
      default:
        break;
    }

    hour = hour.split("");

    if (hour[0] === "0") {
      hour = hour[1];
    }

    return `${hour}:${min} ${AMPM}`;
  }

  convertDateTime(date_time) {
    const dt_arr = date_time.split("T");
    const date = dt_arr[0];
    const time = dt_arr[1];

    return (
      <h3>
        {this.convertDate(date)} {this.convertTime(time)}
      </h3>
    );
  }

  render() {
    if (Object.values(this.props.attendees).length === 0) return "EventBar";

    const event = this.props.event;

    return (
      <div className="sidebar">
        <div className="sidebar-info">
          {this.convertDateTime(event.date_time)}
          <h1>{event.name}</h1>
        </div>
      </div>
    );
  }
}

export default EventBar;
