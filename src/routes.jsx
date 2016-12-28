import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/root';
import Home from './containers/home';
import Features from './containers/features';
import Applications from './components/applications';
import BugDuty from './components/bugDuty';
import Chores from './components/chores';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="features" component={Features} />
    <Route path="applications" component={Applications} />
    <Route path="bugDuty" component={BugDuty} />
    <Route path="chores" component={Chores} />
  </Route>
);
