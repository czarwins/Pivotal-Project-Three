import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProjectMain from './components/pages/ProjectMain';
import ProjectDetails from './components/pages/ProjectDetails';
import { Row } from 'reactstrap';

const routes = [
  {
    path: "/",
    exact: true,
    main: LandingPage
  },
  {
    path: "/projects",
    exact: true,
    sidebar: null,
    main: ProjectMain
  },
  {
    path: "/projects/:projectId",
    main: ProjectDetails
  }
];

class App extends Component {
  render() {
    return (
      <Router>
          <Row>
              {
                // Your Content
                routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))
              }
          </Row>
      </Router>
    );
  }
}

export default App;