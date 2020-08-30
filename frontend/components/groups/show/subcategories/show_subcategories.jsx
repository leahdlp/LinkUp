import React from 'react';

const SubcategoriesList = ({ subcategories, group }) => {
    let subcategory = subcategories[group.subcategory_id];

    return (
        <div className="subcats-container">
            <div className="subcats-header">Related Topics</div>
            <div className="subcat-container">
                <p className="subcategory">{subcategory.name}</p>
            </div>
        </div>
    )
}

export default SubcategoriesList;