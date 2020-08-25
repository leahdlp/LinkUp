import React from 'react';
import GroupShowHeader from './header/group_show_header';
import MemberList from './members/member_list';
import SubcategoriesList from './subcategories/show_subcategories'

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchSubcategory(this.props.group.subcategory_id);
    }

    afterMount() {
        const group = this.props.group
        // debugger
        return (
            <div>
                <GroupShowHeader 
                    currentUser={this.props.currentUser}
                    members={this.props.members}
                    location={this.props.location}
                    group={group}
                    createMember={this.props.createMember}
                    deleteMember={this.props.deleteMember}
                />

                <div className="body-container">
                    <div className="desc-container">
                        {/* <h3>What we're about</h3> */}
                        <p className="description">
                            {/* {group.description} */}
                        </p>
                    </div>
                
                    <MemberList 
                        groupId={this.props.group.id}
                        members={this.props.members}
                        users={this.props.users}
                    />
                </div>

                <SubcategoriesList 
                    subcategories={this.props.subcategories}
                />
            </div>
        )
    }
    
    render() {
        return (
            this.props.subcategories === undefined ? null : this.afterMount()
        )
    }
}

export default GroupShow;