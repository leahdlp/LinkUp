import React from 'react';

const SubcategoriesList = ({ subcategory }) => (
    <div className="subcats-list">
        <div className="subcats-container">
            <div className="subcats-header">Related Topics</div>
            <div className="subcat-container">
                <p className="subcategory">{subcategory}</p>
            </div>
        </div>
    </div>
)


export default SubcategoriesList;