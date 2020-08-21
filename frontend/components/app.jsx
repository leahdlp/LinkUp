import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import CovidContainer from './header/covid/covid_container'
import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './header/session/signup_form_container';
import LogInContainer from './header/session/login_form_container';
import GroupsIndexContainer from './groups/index/groups_index_container';
import GroupShowContainer from './groups/show/group_show_container';
import FooterContainer from "./footer/footer_component_container";

const App = () => (
    <div>
        <header>
            <Route path="/" component={CovidContainer} />
            <Route path="/" component={NavBarContainer} />
        </header>

        <AuthRoute path="/signup" component={SignUpContainer}/>
        <AuthRoute path="/login" component={LogInContainer} />
        <Route exact path="/groups" component={GroupsIndexContainer} />
        <Route path="/groups/:groupId" component={GroupShowContainer} />
        {/* <Route path="/:groupName/members" component={<div>this</div>}/> */}

        <footer>
            <Route path="/" component={FooterContainer} />
        </footer>
    </div>
)

export default App;