import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './header/session/signup_form_container';
import LogInContainer from './header/session/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Hoes Link Up!</h1>
            <Route path="/" component={NavBarContainer} />
        </header>

        <AuthRoute path="/signup" component={SignUpContainer}/>
        <AuthRoute path="/login" component={LogInContainer} />

    </div>
)

export default App;