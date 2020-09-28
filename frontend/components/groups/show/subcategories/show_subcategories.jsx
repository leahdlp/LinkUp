import React from 'react';

const SubcategoriesList = ({ subcategories, group }) => {
    let subcategory = subcategories[group.subcategory_id];

    let sub = subcategory === undefined ? null : subcategory.name

    return (
        <div className="subcats-container">
            <div className="subcats-header">Related Topics</div>
            <div className="subcat-container">
                <p className="subcategory">{sub}</p>
            </div>
        </div>
    )
}

export default SubcategoriesList;