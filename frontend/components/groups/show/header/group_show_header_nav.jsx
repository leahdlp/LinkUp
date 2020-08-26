import React from 'react';
import { Link } from 'react-router-dom';
import NavTabs from './group_header_tabs';

class GroupShowHeaderNav extends React.Component {
    memberButton() {
        const group = this.props.group;

        let button = <button onClick={() => this.props.createMember(group.id)}>
            Join this group
        </button>

        let members = this.props.members;

        for (let id in members) {
            if (this.props.currentUser && 
                members[id].user_id === this.props.currentUser.id) {
                button = <button onClick={() => this.props.deleteMember(id)}>
                    Leave this group
                </button>
            }
        }

        return button;
    }

    displayMemberButton() {
        const group = this.props.group;

        if (this.props.currentUser && 
            this.props.group.creator_id === this.props.currentUser.id) {
            return <div className="not-displayed"></div>;
        } else {
            return this.memberButton()
        }
    }

    editGroupButton() {
        let group = this.props.group;

        let button = <div className="pink-btn-container" id="pink-btn-show-pg">
            <div className="pink-btn">
                <div id="show-edit">
                    <Link to={`/groups/${group.id}/edit`}>Edit Group</Link>
                </div>
            </div>
        </div>

        if (this.props.currentUser && 
            group.creator_id !== this.props.currentUser.id) {
            button = <div className="not-displayed"></div>;
        }

        return button
    }

    deleteGroupButton() {
        let group = this.props.group;

        let button = <div className="pink-btn-container" id="pink-btn-show-pg">
            <div className="pink-btn">
                <button onClick={() => this.props.deleteGroup(group.id)}>
                    Delete Group
                </button>
            </div>
        </div>

        if (this.props.currentUser &&
            group.creator_id !== this.props.currentUser.id) {
            button = <div className="not-displayed"></div>
        }

        return button;
    }

    render() {
        const group = this.props.group;

        return (
            <div className="show-navbar-container">
                <div className="show-navbar">
                    {/* <Link to={`/groups/${group.id}`} id="nav-button">About</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Events</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Members</Link>
                    <Link to={`/groups/${group.id}`} id="nav-button">Photos</Link> */}
                    <div className="tabs-container">
                        <NavTabs 
                            group={group}
                            members={this.props.members}
                        />
                    </div>

                </div>
                <div className="show-nav-btns">
                    <div className="pink-btn-container">
                        <div className="pink-btn">
                            {this.displayMemberButton()}
                        </div>
                    </div>
                    {this.editGroupButton()}
                    {this.deleteGroupButton()}
                </div>
            </div>
        )
    }
}

export default GroupShowHeaderNav;