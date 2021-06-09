import React, {Component} from 'react';

class Course extends Component {
    handleOnClick = () => {
        this.props.registerForCourse(this.props.id)
    }

    render() {
        return (
            <div>
                <li>{this.props.name}</li>
                <button onClick={this.props.registerForCourse}>
                Register</button>
            </div>
        );
    }

};
export default Course;