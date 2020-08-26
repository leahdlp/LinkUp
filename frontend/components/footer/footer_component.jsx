import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => (
    <div className="footer-container">
        <div className="footer">
            <div className="footer-top-container">
                <div className="footer-top">
                    <Link id="footer-link" to={`/groups/new`}>Start a new group</Link>
                </div>
            </div>
            
            {/* <div> */}
                {/* <i className="fab fa-github-square"></i> */}
                {/* <p>Github</p> */}
            {/* </div> */}

        </div>
        <div className="sub-footer">
            <p>2020 LinkUp LLC</p>
            <div className="sub-footer-sub">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
)

export default Footer
