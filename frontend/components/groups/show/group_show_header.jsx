import React from 'react';
import GroupShowHeaderNav from './group_show_header_nav'

class GroupShowHeader extends React.Component {
    componentDidMount() {
        this.props.fetchLocation();
        // this.props.fetchLocation(this.props.group.location_id);
    }


    afterMount() {
        // debugger
        const group = this.props.group;
        // const location = this.props.state.entities.locations[group.location_id];

        return (
            <div className="show-pg-header-container">
                <div className="show-pg-header">
                    <div className="group-details">
                        <h1>{this.props.name}</h1>
                        {/* <p>{location.city}, {location.state}</p> */}
                        <p>{this.props.creatorId}</p>
                    </div>
                    <GroupShowHeaderNav
                        group={group}
                        createMember={this.props.createMember}
                        id="grp-show-nav"
                    />
                </div>
            </div>
        )
    }

    render () {
        return (
            this.props.locations === {} ? null : this.afterMount()
        )
    }
}

export default GroupShowHeader;