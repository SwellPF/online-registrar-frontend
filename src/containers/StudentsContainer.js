import React from 'react';
import Students from './components/Students';
import StudentInput from './components/StudentsInput';


class StudentsContainer extends React.Component {



    render() {
        return (
            <div>
               <StudentInput />
               <Students />
            </div>

        )
    }


}

export default StudentsContainer;
