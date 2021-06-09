import React from 'react';
import {connect} from 'react-redux';
import {fetchCourses} from './actions/fetchCourses';
import CoursesContainer from './containers/CoursesContainer';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchCourses()
  }


  render() {
    return (
      <div className = "App">
        <CoursesContainer />
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {

}
export default connect(null, {fetchCourses})(App);
