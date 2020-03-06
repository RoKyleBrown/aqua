import React from "react";
import MoviesIndexContainer from './content/movies_index_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import {Switch, Route} from 'react-router-dom';
import SplashPage from './splash_page'

const App = () => {
    
    return ( <div>
        
        <Switch>
            <Route exact path="/" component={SplashPage}/>
            <Route exact path="/session/login" component={LoginFormContainer}/>
            <Route exact path="/users/new" component={SignupFormContainer} />
            <Route exact path="/movies" component={MoviesIndexContainer} />
         </Switch>

    </div> )
};

export default App;


//login modal
//sign in form