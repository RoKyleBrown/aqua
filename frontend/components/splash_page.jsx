import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
    
        <div className="splash-container">
            <ul className="splash-nav">
                <li id="logo-splash">Not Hulu</li>
                <li ><Link id="login-btn" to={`/session/login`}>Log In
                </Link></li>
            </ul>
        <div className="splash-background-top">
             <Link className="signup-btn"  to={`/users/new`}>Start Your 
                Free Trial</Link>
        </div>
    </div>
)

export default SplashPage;