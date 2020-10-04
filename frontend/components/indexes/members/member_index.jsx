import React from "react";
import { Link } from "react-router-dom";
import MembersIndexItem from "./member_index_item";

class MembersIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGroup(this.props.groupId);

    if (this.props.members.length === 0) {
      this.props.fetchMembers(this.props.groupId);
    }
  }

  render() {
    const members = this.props.members;
    const group = this.props.group;

    if (group === undefined) return null;

    return (
      <div className="mem-idx-pg">
        <div className="mem-idx-style-bar"></div>
        <ul className="member-index">
          <div className="mem-idx-header">
            <i
              id="mem-idx-arrow"
              className="fas fa-chevron-left"
              onClick={() => this.props.history.push(`/groups/${group.id}`)}
            ></i>
            <div className="mem-idx-info">
              <h3> Members ({members.length})</h3>
              <Link
                className="mem-idx-link"
                to={`groups/${this.props.groupId}`}
              >
                {group.name}
              </Link>
            </div>
          </div>
          {members.map((member) => (
            <MembersIndexItem
              key={`member-${member.id}-${member.name}`}
              member={member}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default MembersIndex;
