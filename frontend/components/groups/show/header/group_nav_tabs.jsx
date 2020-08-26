import React from 'react';
import Tab from './nav_tab_item'

class NavTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }

        this.selectTab = this.selectTab.bind(this);
        this.allMembers = this.allMembers.bind(this);
    }

    selectTab(idx) {
        this.setState({ currentTab: idx })
    }

    allMembers() {
        return (
            <ul>
                {this.props.group.member_ids.map(member_id => (
                    <li key={`member-${member_id}`}>
                        {this.props.members[member_id].name}
                    </li>
                ))}
            </ul>
        )
    }

    setHeader(idx) {
        if (idx === 0) {
            return <h3>What we're about</h3>
        }
    }

    render() {
        const idx = this.state.currentTab;
        const panes = [
            {title: "About", content: this.props.group.description }, 
            {title: "Events", content: "event schedule" }, 
            {title: "Members", content: this.allMembers()}, 
            {title: "Photos", content: "Pics"}
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
                        <article>
                            {selected.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavTabs;