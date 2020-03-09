import React from 'react';
import { Link } from 'react-router-dom';
import ModalLoginFormContainer from './auth/modal_login_form_container';

const SplashPage = (props) => {
    return (<div>
        <div className="splash-container">
            <div className="splash-nav">
                <p id="logo-splash">AQUA</p>
                <p ><button id="login-btn" onClick={(e) => {
                    e.preventDefault();
                    $(".login-modal").addClass("login-modal-open");
                    $(".splash-container").addClass("splash-container-modal-open");
                    }}>
                    Log In
                </button></p>
            </div>
            <div className="splash-background-top">
                    <h1 className="tagline">All Your Movies In One Place</h1>
                    <p className="tag-sub">Watch thousands of your favorite movies, 
                    with plans starting at $5.99/month.
                    
                    <p id="hbo"> HBO®, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</p>
                    </p>
                    <Link className="signup-btn"  to={`/users/new`}>Start Your 
                        Free Trial</Link>
            </div>
        </div>
        <div className="splash-buffer">

        </div>

        <div className="temp-hero"></div>
       
        <div className="login-modal">
                <button id='login-modal-close' onClick={(e) => {
                    e.preventDefault();
                    $(".login-modal").removeClass("login-modal-open");
                    $(".splash-container")
                        .removeClass("splash-container-modal-open");
                }}>&#x2715;</button>
                
            <div className="login-modal-background">
                <ModalLoginFormContainer
                    history={props.history} />
            </div>
        </div>
    </div> )

    
}

export default SplashPage;