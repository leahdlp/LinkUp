import React from "react";

const MemberIndexItem = ({ member }) => (
  <li className="att-index-item">
    <div className="att-index-img">
      <img src={member.photoUrl} alt=""/>
    </div>
    {member.name}
  </li>
);

export default MemberIndexItem;
