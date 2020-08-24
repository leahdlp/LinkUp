import React from 'react';
import GroupShowHeader from './group_show_header';
import MemberList from './members/member_list';
import SubcategoriesList from './subcategories/show_subcategories'

class GroupShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let groupId = this.props.match.params.groupId;
        this.props.fetchGroup(groupId)
            // .then(this.props.fetchLocation())
    }

    afterMount() {
        const group = this.props.group
        // debugger

        return (
            <div>
                <GroupShowHeader 
                    name={group.name}
                    creatorId={group.creator_id}
                    state={this.props.state}
                    fetchLocation={() => this.props.fetchLocation(group.location_id)}
                    group={group}
                    createMember={this.props.createMember}
                />

                <div className="body-container">
                    <div className="desc-container">
                        <h3>What we're about</h3>
                        <p className="description">
                            {group.description}
                        </p>
                    </div>
                
                    <MemberList 
                        fetchMembers={this.props.fetchMembers}
                        groupId={this.props.group.id}
                        members={this.props.members}
                    />
                </div>

                <SubcategoriesList 
                    fetchSubcategory={this.props.fetchSubcategory} 
                    group={group}
                    subcategories={this.props.subcategories}
                />
            </div>
        )
    }
    
    render() {
        return (
            this.props.group === undefined ? null : this.afterMount()
        )
    }
}

export default GroupShow;