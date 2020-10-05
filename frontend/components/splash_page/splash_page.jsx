import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {
    return (
        <div className="splash-container">
            <div className="splash">
                <div className="intro-section">
                    <div className="intro-section-txt">
                        <h1>LinkUp creates possibilities</h1>
                        <p>
                            LinkUp is a platform for finding and building local communities.
                            People use LinkUp to meet new people, learn new things, find
                            support, get out of their comfort zones, and pursue their passions,
                            together.
                        </p>

                        <div className="pink-btn" id="splash-btn">
                            <button 
                                // className="pink-btn"
                                onClick={() => props.history.push("/signup")}>
                                Join LinkUp
                            </button>
                        </div>
                    </div>
                </div>
                <div className="splash-img-container">
                    <div className="splash-img">
                        <div className="splash-img-slides">
                            <i class="fas fa-chevron-left"></i>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <div className="description">
                        <h3>What you can do</h3>
                        <div className="splash-options-container" id="desc-con">
                            <div className="splash-option">
                                <div>
                                    <i id="desc-icon" className="fas fa-map-marker-alt"></i>                                    <h5>Explore your city</h5>
                                    <p>
                                        Visit a museum, try new food, go hiking, hit up a 
                                        brewery tour, or just go meet new people
                                    </p>
                                </div>
                            </div>
                            <div className="splash-option">
                                <div>
                                    <i id="desc-icon" className="fas fa-briefcase"></i>
                                    <h5>Build your career</h5>
                                    <p>
                                        Test a prototype, network, take a class, learn a language, 
                                        pitch to investors, or learn a new skill
                                    </p>
                                </div>
                            </div>
                            <div className="splash-option">
                                <div>
                                    <i id="desc-icon" className="fas fa-image"></i>
                                    <h5>Get creative</h5>
                                    <p>
                                        Create a podcast, write a screenplay, discuss art, 
                                        design something, or get feedback on your work
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="splash-btn-container">
                            <div className="pink-btn" id="splash-btn">
                                <button onClick={() => props.history.push("/signup")}>
                                    See more topics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="splash-how-it-works-container">
                    <div className="splash-how-it-works">
                        How it works
                        <div className="splash-img-container" id="works">
                            <div className="splash-img" id="works-img">
                                <div 
                                    className="splash-img-slides" 
                                    id="works-img-slides">
                                        <i class="fas fa-chevron-left"></i>
                                        <i class="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-container">
                    <div className="features">
                        <h3>Want to do more of what you love?</h3>
                        <div className="splash-options-container" id="feature">
                            <div className="splash-option">
                                <div>
                                    <i id="feature-icon" className="fas fa-search"></i>
                                </div>
                                <div>
                                    <h5 id="feature-head">Discover groups</h5>
                                    <p id="feature-body">
                                        See who’s hosting local events for all 
                                        the things you love.
                                    </p>
                                    <Link 
                                        id="feature-link"
                                        className="splash-link"
                                        to="/signup">
                                        Join Meetup
                                    </Link>
                                </div>
                            </div>
                            <div className="splash-option">
                                <div>
                                    <i id="feature-icon" className="fas fa-plus"></i>
                                </div>
                                <div>
                                    <h5 id="feature-head">Start a group</h5>
                                    <p id="feature-body">
                                        Create your own Meetup group, and draw 
                                        from a community of millions.
                                    </p>
                                    <Link 
                                        id="feature-link"
                                        className="splash-link"
                                        to="/login">
                                        Start a group
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Splash;