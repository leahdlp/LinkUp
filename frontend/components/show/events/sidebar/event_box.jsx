import React from "react";

class EventBox extends React.Component {
  constructor(props) {
    super(props);

    this.eventButton = this.eventButton.bind(this);
    this.convertDate = this.convertDate.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.startTime = this.startTime.bind(this);
    this.endTime = this.endTime.bind(this);
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

  handleHours(hour) {
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
      case "00":
        hour = "12";
        AMPM = "AM";
        break;
      default:
        break;
    }

    hour = hour.split("");

    if (hour[0] === "0") {
      hour = hour[1];
    } else {
      hour = hour.join("");
    }

    return [hour, AMPM];
  }

  startTime(hms) {
    let start_hour = hms[0];
    const min = hms[1];

    let str_time = this.handleHours(start_hour);

    let strt_hr = str_time[0];
    const AMPM = str_time[1];

    return `${strt_hr}:${min} ${AMPM}`;
  }

  endTime(hms) {
    let end_hour = (parseInt(hms[0]) + 2).toString();
    const min = hms[1];

    let end_time = this.handleHours(end_hour);
    end_hour = end_time[0];

    const AMPM = end_time[1];

    return `${end_hour}:${min} ${AMPM}`;
  }

  convertTime(time) {
    const hms = time.split(":");
    return [this.startTime(hms), this.endTime(hms)];
  }

  convertDateTime(date_time) {
    const dt_arr = date_time.split("T");
    const date = dt_arr[0];
    const time = dt_arr[1];

    return (
      <div className="date-time">
        <h3 id="date">{this.convertDate(date)}</h3>
        <h3 id="time">
          {this.convertTime(time)[0]} to {this.convertTime(time)[1]}
        </h3>
      </div>
    );
  }

  render() {
    const event = this.props.event;

    return (
      <div className="event-info">
        <i className="far fa-clock"></i>
        {this.convertDateTime(event.date_time)}
      </div>
    );
  }
}

export default EventBox;
