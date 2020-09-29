import React from 'react';

class EventIndex extends React.Component {
    componentDidMount() {
        // this.props.fetchGroup();
        this.props.fetchEvents();
    }

    render() {
        // if (this.props.events === {})
        const events = this.props.events;

        return (
            <div>
                <ul>
                    {Object.values(events).map(event => (
                        <li>{event.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventIndex