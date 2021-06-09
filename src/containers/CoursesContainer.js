import React from 'react';
import Courses from '../components/Courses';
import {connect} from 'react-redux';
import {fetchCourses} from '../actions/fetchCourses';


class CoursesContainer extends React.Component {

componentDidMount() {
    this.props.fetchCourses()
}

    render() {
        return (
            <div>
               <Courses courses={this.props.courses}/>
            </div>

        )
    }


}

const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, {fetchCourses})(CoursesContainer);


