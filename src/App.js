import React from 'react';
import {connect} from 'react-redux';
import {fetchStudents} from './actions/fetchStudents';

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchStudents()
  }


  render() {
    return (
      <div className = "App">
        App
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {

}
export default connect(null, {fetchStudents})(App);
