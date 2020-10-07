import React from 'react';
import Tab from './nav_tab_item'

class NavTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        currentTab: 0,
        };

        this.selectTab = this.selectTab.bind(this);
        this.changeWindowSize = this.changeWindowSize.bind(this)
        this.allMembers = this.allMembers.bind(this);
        this.convertDate = this.convertDate.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.convertDateTime = this.convertDateTime.bind(this);
        this.separateAttendees = this.separateAttendees.bind(this);
        this.numAttendees = this.numAttendees.bind(this);
        this.renderAddEvent = this.renderAddEvent.bind(this);
        this.allEvents = this.allEvents.bind(this);
        this.allPhotos = this.allPhotos.bind(this);
    }

    componentDidMount() {
        Object.values(this.props.events).map((event) =>
            this.props.fetchAttendees(event.id)
        );
    }

    selectTab(idx) {
        this.setState({ currentTab: idx });

        let type;
        switch (idx) {
            case 1:
                type = 'events';
                break;
            case 2:
                type = 'members';
                break;
            case 3: 
                type = 'photos';
                break
            default:
                type = '';
                break;
        }

        this.changeWindowSize(type);
    }

    changeWindowSize(type) {
        let section = document.getElementsByClassName("member-section")[0];
        let page = document.getElementsByClassName("mem-head-body")[0];

        // console.log(section);

        section.setAttribute("id", "gshow-event-section");
        page.setAttribute("id", "gshow-event-page")

        section = document.getElementById("gshow-event-section");
        page = document.getElementById("gshow-event-page")

        let height; 
        
        switch (type) {
            case 'events':
                height = `${Object.values(this.props.events).length * 160}px`;
                break;
            case 'members':
                console.log('here')
                height = `${Object.values(this.props.members).length * 115}px`;
                console.log(height)
                break;
            case 'photos':
                height = `${(20 / 4) * 170}px`;
                console.log(height)
                break;
            default:
                height = 'fit-content'
                console.log(height)
                break;
        }

        section.setAttribute("style", `height: ${height}`)
        // page.setAttribute("style", `height: ${height * 10}px`)
    }

    revertWindowSize(type) {

    }

    allMembers() {
        const members = this.props.members;

        if (Object.values(members).length === 0) return null;

        return (
        <div className="tab-member-list-container">
            <ul className="tab-member-list">
            {Object.values(members).map((member) => {
                if (member.group_id === this.props.group.id) {
                return (
                    <li key={`member-${member.id}`} className="tab-member">
                    <div className="member-photo"></div>
                    {member.name}
                    </li>
                );
                }
            })}
            </ul>
        </div>
        );
    }

    separateAttendees() {
        const events = this.props.events;
        const attendees = this.props.attendees;

        const eventIds = Object.keys(events);
        const separated = {};

        for (let id in attendees) {
        if (separated[attendees[id].event_id]) {
            separated[attendees[id].event_id].push(attendees[id]);
        } else {
            separated[attendees[id].event_id] = [attendees[id]];
        }
        }

        return separated;
    }

    numAttendees(eventId) {
        const attendees = this.separateAttendees();

        if (!attendees[eventId]) return 0;

        return attendees[eventId].length;
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
        }

        return `${hour}:${min} ${AMPM}`;
    }

    convertDateTime(date_time) {
        const dt_arr = date_time.split('T');
        const date = dt_arr[0];
        const time = dt_arr[1];

        return (
          <p className="ge-datetime">
            {this.convertDate(date)}    {this.convertTime(time)}
          </p>
        );
    }

    renderAddEvent() {
        if (this.props.currentUser.id === this.props.group.creator_id) {
            return (
              <div 
                onClick={() => this.props.history.push(
                    `/groups/${this.props.group.id}/events/new`
                )}
                className="tab-event-item">
                    <div className="add-event">
                        <i className="fas fa-plus-circle"></i>
                        <h3>Add Event</h3>
                    </div>
              </div>
            );
        }
    }

    allEvents() {
        const events = this.props.events;
        if (Object.values(events).length === 0) return null;

        return (
        <div>
            {this.renderAddEvent()}
            <ul className="tab-events">
            {Object.values(events).map((event) => {
                if (event.group_id === this.props.group.id) {
                return (
                    <li
                    key={`event-${event.id}`}
                    className="tab-event-item"
                    onClick={() => this.props.history.push(`/events/${event.id}`)}
                    >
                    <div className="tab-event">
                        <div className="tab-event-head">
                        <div className="tab-event-head-info">
                            {this.convertDateTime(event.date_time)}
                            <p className="ge-name">{event.name}</p>
                        </div>
                        <div className="group-event-img"></div>
                        </div>
                        <div className="tab-event-foot">
                        <p className="ge-desc">{event.description}</p>
                        </div>
                        <div className="group-event-bar">
                        <p>{this.numAttendees(event.id)} attendees</p>
                        <button
                            onClick={() =>
                            this.props.history.push(`/events/${event.id}`)
                            }
                        >
                            Attend
                        </button>
                        </div>
                    </div>
                    </li>
                );
                }
            })}
            </ul>
        </div>
        );
    }

    allPhotos() {
        const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        return (
            <ul className="photo-list">
                {photos.map(photo => {
                    return <li className="photo-list-item"></li>
                })}
            </ul>
        )
    }

    setHeader(idx) {
        if (idx === 0) {
        return <h3>What we're about</h3>;
        }
    }

    render() {
        const idx = this.state.currentTab;
        const panes = [
        { title: "About", content: this.props.group.description },
        { title: "Events", content: this.allEvents() },
        { title: "Members", content: this.allMembers() },
        { title: "Photos", content: this.allPhotos() },
        ];
        const selected = panes[idx];

        return (
        <div className="tab">
            <div className="tab-header-container">
            <Tab
                currentPane={this.state.currentTab}
                switchTab={this.selectTab}
                panes={panes}
            />
            </div>
            <div className="tab-content-container">
            <div className="tab-content">
                {this.setHeader(idx)}
                <article>{selected.content}</article>
            </div>
            </div>
        </div>
        );
    }
    }

    export default NavTabs;