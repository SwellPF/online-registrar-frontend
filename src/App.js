import React from 'react';
import CoursesContainer from './containers/CoursesContainer';
import StudentsContainer from './containers/StudentsContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import Questions from './Questions';
import Login from './Login';

class App extends React.Component {
  

  render() {
    return (
      <Router>
        <div className = "App">
          <NavBar />
            <Route exact path='/' component={Home}/>
            <Route exact path='Welcome' component={Welcome}/>
            <Route exact path='Questions' component={Questions}/>
            <Route exact path='Login' component={Login}/>
        </div>
      </Router>
    );
  }
}



export default App;
