import React from 'react';
import CoursesContainer from './containers/CoursesContainer';
import StudentsContainer from './containers/StudentsContainer';

class App extends React.Component {
  

  render() {
    return (
      <div className = "App">
        <CoursesContainer />

        <StudentsContainer />
      </div>
    );
  }
}



export default App;
