import React from 'react';

class SubcategoriesList extends React.Component {
    componentDidMount() {
        this.props.fetchSubcategory(this.props.group.subcategory_id);
    }

    render() {
        return (
            <ul>
                {this.props.subcategories.map(subcategory => (
                    <li key={`subcat-${subcategory.id}`}>{subcategory.name}</li>
                ))}

            </ul>
        )
    }
}

export default SubcategoriesList;