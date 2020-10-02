import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import CovidContainer from './header/covid/covid_container'
import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './forms/session/signup_form_container';
import LogInContainer from './forms/session/login_form_container';
import GroupsIndexContainer from "./indexes/groups/groups_index_container";
import GroupShowContainer from './show/groups/group_show_container';
import GroupCreateFormContainer from './forms/groups/create_form_container';
import GroupEditFormContainer from './forms/groups/update_form_container';
import EventIndexContainer from './indexes/events/event_index_container';
import EventCreateFormContainer from "./forms/events/create_event_container";
import EventEditFormContainer from "./forms/events/edit_event_container";
import EventShowContainer from "./show/events/event_show_container";
import FooterContainer from "./footer/footer_component_container";
import Landing from './splash_page/splash_page';

const App = () => (
  <div>
    <header>
      <Route path="/" component={CovidContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>

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
      {/* <ProtectedRoute exact path="/" component={GroupsIndexContainer} /> */}
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
      <Route exact path="/" component={EventIndexContainer} />
    </Switch>

    <footer>
      <Route path="/" component={FooterContainer} />
    </footer>
  </div>
);

export default App;