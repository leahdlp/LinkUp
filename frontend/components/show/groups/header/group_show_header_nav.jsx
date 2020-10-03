import React from 'react';
import { Link } from 'react-router-dom';
import NavTabs from './group_nav_tabs';

class GroupShowHeaderNav extends React.Component {
    memberButton() {
        const group = this.props.group;

        let button =
            <button onClick={() => this.props.createMember(group.id)}>
                Join group
            </button>

        let members = this.props.members;

        for (let id in members) {
            if (this.props.currentUser && 
                members[id].user_id === this.props.currentUser.id) {
                button = <button onClick={() => this.props.deleteMember(id)}>
                    Leave group
                </button>
            }
        }

        return button;
    }

    editGroupButton() {
        let group = this.props.group;

        let button = 
            <div id="show-edit">
                <Link to={`/groups/${group.id}/edit`}>Edit Group</Link>
            </div>

        // if (this.props.currentUser && 
        //     group.creator_id !== this.props.currentUser.id) {
        //     button = <div className="not-displayed"></div>;
        // }

        return button
    }

    deleteGroupButton() {
        let group = this.props.group;

        let button =
            <div id="show-edit">
                <Link to="/" onClick={() => this.props.deleteGroup(group.id)}>
                    Delete Group
                </Link>
            </div>

        if (this.props.currentUser &&
            group.creator_id !== this.props.currentUser.id) {
            button = <div className="not-displayed"></div>
        }

        return button;
    }

    groupButtons() {
        return (<div className="group-btns">
            {this.editGroupButton()}
            {this.deleteGroupButton()}
        </div>)
    }

    displayMemberButtonOrGroupButtons() {
        if (this.props.currentUser &&
            this.props.group.creator_id === this.props.currentUser.id) {
            return this.groupButtons();
        } else if (this.props.currentUser &&
            this.props.group.creator_id !== this.props.currentUser.id) {
            return this.memberButton()
        } else {
            return (
                <Link id="join-to-login" to="/login">Join Group</Link>
            )
        }
    }

    render() {
        const group = this.props.group;
        // console.log(this.props.history)
        return (
            <div className="show-navbar-container">
                <div className="show-navbar">
                    {/* <div className="show-navbar"> */}
                    <div className="tabs-container">
                        <NavTabs 
                            history={this.props.history}
                            group={group}
                            members={this.props.members}
                            events={this.props.events}
                            attendees={this.props.attendees}
                            fetchAttendees={this.props.fetchAttendees}
                        />
                    </div>
                    <div className="show-nav-btns">
                        <div className="show-pink-btn-container">
                            <div className="show-pink-btn">
                                {this.displayMemberButtonOrGroupButtons()}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default GroupShowHeaderNav;