import React from 'react';
import { Link } from 'react-router-dom';
import NavTabs from './group_header_tabs';

class GroupShowHeaderNav extends React.Component {
    memberButton() {
        const group = this.props.group

        let button = <button onClick={() => this.props.createMember(group.id)}>
            Join this group
        </button>

        let members = this.props.members;

        for (let id in members) {
            if (members[id].user_id === this.props.currentUser.id) {
                button = <button onClick={() => this.props.deleteMember(id)}>
                    Leave this group
                </button>
            }
        }

        return button;
    }

    editGroupButton() {
        let group = this.props.group;

        let button = <div className="pink-btn-container" id="pink-btn-show-pg">
            <div className="pink-btn">
                <Link to={`/groups/${group.id}/edit`}>Edit Group</Link>
            </div>
        </div>

        if (group.creator_id !== this.props.currentUser.id) {
            console.log(button)
            console.log(group.creator_id);
            console.log(this.props.currentUser.id)
            button = "";
        }

        return button
    }

    render() {
        const group = this.props.group;

        return (
            <div className="show-navbar-container">
                <div className="show-navbar">
                    <Link to={`/groups/${group.id}`} id="nav-button">About</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Events</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Members</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Photos</Link>
                    {/* <div className="tabs-container">
                        <NavTabs 
                            group={group}
                            members={this.props.members}
                        />
                    </div> */}

                    <div className="pink-btn-container" id="pink-btn-show-pg">
                        <div className="pink-btn">
                            {this.memberButton()}
                        </div>
                    </div>
                    {this.editGroupButton()}
                </div>
            </div>
        )
    }
}

export default GroupShowHeaderNav;