import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
            <div className="splash-container">
                <div className="splash-nav">
                    <p id="logo-splash">Not Hulu</p>
                    <p ><Link id="login-btn" to={`/session/login`}>Log In
                    </Link></p>
                </div>
            <div className="splash-background-top">
                <h1 className="tagline">All Your Movies In One Place</h1>
                <p className="tag-sub">Watch thousands of shows and movies, with plans starting at $5.99/month.</p>
                <Link className="signup-btn"  to={`/users/new`}>Start Your 
                    Free Trial</Link>
            </div>
        
        </div>

    
)

export default SplashPage;