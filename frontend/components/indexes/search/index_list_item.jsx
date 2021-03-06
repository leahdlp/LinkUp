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

    componentDidMount() {
        this.renderUserVisual();
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
            case "00":
                hour = "12";
                AMPM = 'AM';
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
 
    renderUserCircles(users) {
        if (users[0] === undefined) return null;

        switch (users.length) {
            case 0:
                return;
            case 1:
                return (
                    <div className="circle-users">
                        <div id="user1-circle">
                            <img src={users[0].photoUrl} alt=""/>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="circle-users">
                        <div id="user1-circle">
                            <img src={users[0].photoUrl} alt=""/>
                        </div>
                        <div id="user2-circle">
                            <img src={users[1].photoUrl} alt=""/>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="circle-users">
                        <div id="user1-circle">
                            <img src={users[0].photoUrl} alt=""/>
                        </div>
                        <div id="user2-circle">
                            <img src={users[1].photoUrl} alt=""/>
                        </div>
                        <div id="user3-circle">
                            <img src={users[2].photoUrl} alt=""/>
                        </div>
                    </div>
                )
        }
    }

    renderUserVisual() {
        const type = this.props.type;
        const entity = this.props.entity;

        const numUsers = type === 'event' ? this.numAttendees() : this.numMembers();
        const users = type === 'event' ? 
        (entity.attendee_ids.slice(0, 3).map(attendeeId => {
            let attendee;
            this.props.fetchAttendee(attendeeId)
                .then(action => {
                    attendee = action.attendee
                })
                .fail(err => console.log(err))

            if (attendee) return attendee;
        }))
        : 
        (entity.member_ids.slice(0, 3).map(memberId => {
            let member;
            this.props.fetchMember(memberId)
                .then(action => {
                    member = action.member
                })
                .fail(err => console.log(err))
            
            if (member) return member;
        }))
        const label = type === 'event' ? "attendees" : "members";

        return (
            <div className="search-idx-users">
                {this.renderUserCircles(users)}
                <div className="user-count">
                    {numUsers} {label}
                </div>
            </div>
        );
    }

    render() {
        
        const history = this.props.history;
        const type = this.props.type;
        const entity = this.props.entity;
        const photo = this.props.entity.photoUrl
        
        let date_time = type === 'event' ? this.convertDateTime(entity.date_time) : "";

        return (
          <li
            className="search-index-item"
            onClick={() => history.push(`/${type}s/${entity.id}`)}
          >
            <div className="search-index-img">
                <img src={photo} alt=""/>
            </div>
            <div className="search-idx-info">
              {date_time}
              {entity.name}
              <p className="search-idx-group">{entity.group}</p>
              {this.renderUserVisual()}
            </div>
          </li>
        );
    }
}

export default IndexListItem;
