import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';
import CandidateDashboard from '../components/CandidateDashboard';
import Dashboard from '../components/Dashboard';
import CandidateRecordVideo from '../components/CandidateRecordVideo';
import HrVideoPlayer from '../components/HrVideoPlayer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" render={() => <HomePage />} exact />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/getvideo" component={HrVideoPlayer} />
        <Route path="/uploadvideo" component={CandidateRecordVideo} />
        <Route path="/dev" component={HrVideoPlayer} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
