import React from "react";

const MemberIndexItem = ({ member }) => (
  <li className="att-index-item">
    <div className="att-index-img"></div>
    {member.name}
  </li>
);

export default MemberIndexItem;
