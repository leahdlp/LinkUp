import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import CovidContainer from './header/covid/covid_container'
import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './session/signup_form_container';
import LogInContainer from './session/login_form_container';
import GroupsIndexContainer from './groups/index/groups_index_container';
import GroupShowContainer from './groups/show/group_show_container';
import GroupCreateFormContainer from './groups/forms/create_form_container';
import GroupEditFormContainer from './groups/forms/update_form_container';
import EventIndexContainer from './events/index/event_index_container';
import EventCreateFormContainer from './events/forms/create_event_container';
import EventEditFormContainer from './events/forms/edit_event_container';
import EventShowContainer from './events/show/event_show_container';
import FooterContainer from "./footer/footer_component_container";
import Landing from './splash_page/splash_page';

const App = () => (
  <div>
    <header>
      <Route path="/" component={CovidContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      {/* <AuthRoute path="/" component={EventIndexContainer} /> */}
      {/* <ProtectedRoute path="/" component={GroupsIndexContainer} /> */}
    </Switch>

    <Switch>
      <ProtectedRoute
        exact
        path="/groups/:groupId/edit"
        component={GroupEditFormContainer}
      />
      <ProtectedRoute
        exact
        path="/groups/new"
        component={GroupCreateFormContainer}
      />
      <Route exact path="/groups/:groupId" component={GroupShowContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute exact path="/" component={GroupsIndexContainer} />
      <AuthRoute exact path="/" component={Landing} />
    </Switch>

    <Switch>
      <ProtectedRoute
        exact
        path="/groups/:groupId/events/new"
        component={EventCreateFormContainer}
      />
      <Route
        exact
        path="/events/:eventId/edit"
        component={EventEditFormContainer}
      />
      <Route path="/events/:eventId" component={EventShowContainer} />
    </Switch>

    <footer>
      <Route path="/" component={FooterContainer} />
    </footer>
  </div>
);

export default App;