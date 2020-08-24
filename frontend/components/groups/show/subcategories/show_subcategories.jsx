import React from 'react';

class SubcategoriesList extends React.Component {
    componentDidMount() {
        this.props.fetchSubcategory(this.props.group.subcategory_id);
    }

    render() {
        return (
            <div className="subcats-container">
                <div className="subcats-header">Related Topics</div>
                <ul className="subcats-list">
                    {this.props.subcategories.map(subcategory => (
                        <li 
                            key={`subcat-${subcategory.id}`}
                            className="subcategory"
                        >
                            {subcategory.name}
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

export default SubcategoriesList;