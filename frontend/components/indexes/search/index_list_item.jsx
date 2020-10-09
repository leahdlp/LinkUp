import React from "react";

const MemberIndexItem = ({ history, type, entity }) => (
  <li 
    className="search-index-item" 
    onClick={() => history.push(`/${type}s/${entity.id}`)}>
    <div className="search-index-img"></div>
    {entity.name}
  </li>
);

export default MemberIndexItem;
