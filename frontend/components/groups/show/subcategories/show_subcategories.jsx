import React from 'react';

const SubcategoriesList = ({ subcategories }) => {
    return (
        <div className="subcats-container">
            <div className="subcats-header">Related Topics</div>
            <ul className="subcats-list">
                {subcategories.map(subcategory => (
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

export default SubcategoriesList;