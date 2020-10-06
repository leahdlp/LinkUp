import React from "react";




const Tab = (props) => {
  let selected = props.currentPane;
  let headers = props.panes.map((pane, idx) => {
    let title = pane.title;
    let iden = idx === selected ? "splash-current" : "";

    // <div className="slide-section2">
        {/* <i class="far fa-circle"></i> */}

        {/* <i class="far fa-circle"></i> */}
    // </div>;

    return (
      <li
        key={`tab-${idx}`}
        className="splash-eachtab"
        id={iden}
      >
        <i className="fas fa-dot-circle" id="tab-cirlce"></i>
      </li>
    );
  });

  return <ul className="tab-header">{headers}</ul>;
};

export default Tab;
