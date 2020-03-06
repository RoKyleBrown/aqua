import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
    <div>
        <p className="logo-splash">Not Hulu</p>
        <Link className="login-btn" to={`/session/login`}>Log In</Link>
        <br />
        <Link to={`/users/new`}>Sign Up</Link>
    </div>
)

export default SplashPage;