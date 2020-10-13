import React from "react";

class IndexListItem extends React.Component {
    constructor(props) {
        super(props);

        this.numAttendees = this.numAttendees.bind(this);
        this.numMembers = this.numMembers.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.convertDate = this.convertDate.bind(this);
        this.convertDateTime = this.convertDateTime.bind(this);
        this.renderUserCircles = this.renderUserCircles.bind(this);
        this.renderUserVisual = this.renderUserVisual.bind(this);
    }

    numAttendees() {
        return this.props.entity.attendee_ids.length;
    }

    numMembers() {
        return this.props.entity.member_ids.length;
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
            case "24":
                hour = "12";
                AMPM = 'PM';
                break;
            default:
                break;
        }

        hour = hour.split('');

        if (hour[0] === '0') {
            hour = hour[1];
        } else {
            hour = hour.join('')
        }

        return `${hour}:${min} ${AMPM}`;
    }

    convertDateTime(date_time) {
        const dt_arr = date_time.split('T');
        const date = dt_arr[0];
        const time = dt_arr[1];

        return (
          <p className="search-idx-datetime">
            {this.convertDate(date)}    {this.convertTime(time)}
          </p>
        );
    }

    renderUserCircles(num) {
        switch (num) {
            case 0:
                return;
            case 1:
                return (
                    <div className="circle-users">
                        <div id="user1-circle"></div>
                    </div>
                )
            case 2:
                return (
                    <div className="circle-users">
                        <div id="user1-circle"></div>
                        <div id="user2-circle"></div>
                    </div>
                )
            default:
                return (
                    <div className="circle-users">
                        <div id="user1-circle"></div>
                        <div id="user2-circle"></div>
                        <div id="user3-circle"></div>
                    </div>
                )
        }
    }

    renderUserVisual() {
        const numUsers = this.props.type === 'event' ? this.numAttendees() : this.numMembers();
        const users = this.props.type === 'event' ? "attendees" : "members"
        

        return (
            <div className="search-idx-users">
                {this.renderUserCircles(numUsers)}
                <div className="user-count">
                    {numUsers} {users}
                </div>
            </div>
        );
    }

    render() {
        
        const history = this.props.history;
        const type = this.props.type;
        const entity = this.props.entity;
        const groups = this.props.groups;
        
        let date_time;
        let group;
        
        if (type === 'event') {
            if (!groups[entity.group_id]) {
                this.props.fetchGroup(entity.group_id)
                    .then(action => group = action.group.name)
            }

            date_time = this.convertDateTime(entity.date_time);
        } else {
            date_time = "";
            group = "";

        }

        return (
          <li
            className="search-index-item"
            onClick={() => history.push(`/${type}s/${entity.id}`)}
          >
            <div className="search-index-img"></div>
            <div className="search-idx-info">
              {date_time}
              {entity.name}
              <p className="search-idx-group">{group}</p>
              {this.renderUserVisual()}
            </div>
          </li>
        );
    }
}

export default IndexListItem;
