import React from "react";
import MoviesIndexContainer from './content/movies_index_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import {Switch, Route} from 'react-router-dom';
import SplashPage from './splash_page'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { withRouter } from "react-router";
import { useEffect } from "react"
import MovieShowContainer from "./content/movie_show_container";
import ContentPage from "./content/content_page";
const App = () => {

    function ScrollToTopOnMount() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    }
    return ( <div>
        <ScrollToTopOnMount />
        <Switch>
            <Route exact path="/" component={SplashPage}/>
            <AuthRoute exact path="/session/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/users/new" component={SignupFormContainer} />
            <ProtectedRoute exact path="/movies" component={MoviesIndexContainer} />
            <ProtectedRoute path="/movies/:moviesId" component={MovieShowContainer}/>
            <ProtectedRoute path="/content" component={ContentPage}/>
         </Switch>

    </div> )
};

export default withRouter(App);


//login modal
//sign in form