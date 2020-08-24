import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

import CovidContainer from './header/covid/covid_container'
import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './session/signup_form_container';
import LogInContainer from './session/login_form_container';
import GroupsIndexContainer from './groups/index/groups_index_container';
import GroupShowContainer from './groups/show/group_show_container';
import GroupCreateFormContainer from './groups/forms/create_form_container';
import GroupEditFormContainer from './groups/forms/update_form_container';
import FooterContainer from "./footer/footer_component_container";

const App = () => (
    <div>
        <header>
            <Route path="/" component={CovidContainer} />
            <Route path="/" component={NavBarContainer} />
        </header>

        <Switch>
            <Route exact path="/groups/:groupId/edit" component={GroupEditFormContainer} />
            <Route exact path="/groups/new" component={GroupCreateFormContainer}/>
            <Route path="/groups/:groupId" component={GroupShowContainer} />
            <AuthRoute path="/login" component={LogInContainer} />
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <Route path="/" component={GroupsIndexContainer} />
            {/* <Route path="/:groupName/members" component={<div>this</div>}/> */}
            {/* <h1>what?</h1> */}
        </Switch>

        <footer>
            <Route path="/" component={FooterContainer} />
        </footer>
    </div>
)

export default App;