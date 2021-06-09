import React from 'react';
import Students from '../components/Students';
import StudentInput from '../components/StudentInput';
import {connect} from 'react-redux';


class StudentsContainer extends React.Component {



    render() {
        return (
            <div>
               <StudentInput />
               <br></br>
               <Students />
            </div>

        )
    }


}

export default connect()(StudentsContainer);
