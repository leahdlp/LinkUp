import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, LandingRoute } from '../util/route_util';

import CovidContainer from './header/covid/covid_container'
import NavBarContainer from './header/nav_bar/navbar_container';
import SignUpContainer from './forms/session/signup_form_container';
import LogInContainer from './forms/session/login_form_container';
// import GroupsIndexContainer from "./indexes/groups/groups_index_container";
import GroupShowContainer from './show/groups/group_show_container';
import GroupCreateFormContainer from './forms/groups/create_form_container';
import GroupEditFormContainer from './forms/groups/update_form_container';
// import EventIndexContainer from './indexes/events/event_index_container';
import EventCreateFormContainer from "./forms/events/create_event_container";
import EventEditFormContainer from "./forms/events/edit_event_container";
import EventShowContainer from "./show/events/event_show_container";
import FooterContainer from "./footer/footer_component_container";
import AttendeeIndex from './indexes/attendee/attendee_index_container';
import MemberIndexContainer from './indexes/members/member_index_container';
// import SearchBarContainer from './search_bar/search_bar_container';
import IndexListContainer from './indexes/search/index_list_container';
import Landing from './splash_page/landing_container';
import Splash from './splash_page/splash_page';

const App = () => (
  <div>
    <header>
      <Route path="/" component={CovidContainer} />
      <Route path="/" component={NavBarContainer} />
    </header>

    <LandingRoute exact path="/" component={Landing} />
    <AuthRoute exact path="/splash" component={Splash} />

    <Switch>
        <Route exact path="/find/keyword=:keyword" component={IndexListContainer} />
        <Route exact path="/find" component={IndexListContainer} />
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
      <ProtectedRoute exact path="/groups/:groupId/members" component={MemberIndexContainer}/>
      <Route exact path="/groups/:groupId" component={GroupShowContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
    </Switch>

    <Switch>
      <ProtectedRoute
        exact
        path="/groups/:groupId/events/new"
        component={EventCreateFormContainer}
      />
      <Route path="/events/:eventId/attendees" component={AttendeeIndex} />
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