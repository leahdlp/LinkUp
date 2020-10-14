import React from 'react';

const Background = props => (
        <div className='background-img'>
            {props.renderErrors()}
            <div className="entity-form-page">
                <div className="entity-form-container">
                    {props.renderHeader()}
                    {props.renderForm()}
                </div>
            </div>
        </div>
)

export default Background;