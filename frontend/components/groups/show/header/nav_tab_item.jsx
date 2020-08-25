import React from 'react';

const Tab = props => {
    let selected = props.currentPane;
    let headers = props.panes.map((pane, idx) => {
        let title = pane.title;
        let klass = idx === selected ? "current" : "";

        return (
            <li 
                key={`tab-${idx}`} 
                className={klass} 
                className='eachtab'
                onClick={() => props.switchTab(idx)}
            >
                {title}
            </li>
        )
    })

    return(
        <ul className="tab-header">
            {headers}
        </ul>
    )
}

export default Tab;