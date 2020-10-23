import React from 'react';

class EntitiesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.entity = this.props.entity
        this.item;
    }

    componentDidMount() {
        this.item = document.getElementsByClassName("grid-item")[this.props.idx]
        this.item.setAttribute("style", `background-image: url(${this.entity.photoUrl})`)
    }

    render() {
        const history = this.props.history;
        const indexType = this.props.indexType;
        const link = indexType === "Group" ? 
        `/groups/${this.entity.id}` : `/events/${this.entity.id}`;
        
        return (
            <div 
                onClick={() => history.push(link)}
                className="grid-item">
                <li className="index-item">
                    {this.entity.name}
                </li>
            </div>
        )
    }
}

export default EntitiesIndexItem;