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
            
            <div className="my-links-container">
                <div className ="my-links">
                    <ul className="link-list">

                        <li>
                            <i className="fab fa-linkedin"></i>
                            <a id="linkedin" href="https://www.linkedin.com/in/leahdelapena/">LinkedIn</a>
                        </li>
                        <li>
                            <i className="fab fa-github-square"></i>
                            <a id="github" href="https://github.com/leahdlp">Github</a>
                        </li>
                        <li>
                            <i className="fab fa-angellist"></i>
                            <a id="angellist" href="https://angel.co/u/leah-de-la-pena">AngelList</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="sub-footer-container">
            <div className="sub-footer">
                <p>2020 LinkUp LLC</p>
                <div className="sub-footer-sub">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer
