import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/Index';
import LoginPage from './pages/Login';
import CoursePage from './pages/sub/Course';
import RecomCoursePage from './pages/sub/RecomCourse';
import SliderPage from './pages/sub/Slider';
import CollectionPage from './pages/sub/Collection';
import TeacherPage from './pages/sub/Teacher';
import StudentPage from './pages/sub/Student';
import CrawlerPage from './pages/sub/Crawler';
import ErrorPage from './pages/sub/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={ LoginPage } path="/login" />
        <Route path="/" render={ props => (
          <IndexPage history={ props.history }>
            <Switch>
              <Route component={ CoursePage } history={ props.history } path="/course" />
              <Route component={ RecomCoursePage } path="/recom_course"/>
              <Route component={ SliderPage } path="/slider" />
              <Route component={ CollectionPage } path="/collection" />
              <Route component={ TeacherPage } path="/teacher" />
              <Route component={ StudentPage } path="/student" />
              <Route component={ CrawlerPage } path="/crawler" />
              <Route component={ ErrorPage } />
            </Switch>
          </IndexPage>
        )}/> 
      </Switch>
    </Router>
  );
}

export default App;
