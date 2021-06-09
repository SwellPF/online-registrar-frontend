import React from 'react';
import {connect} from 'react-redux';
import {addStudent} from '../actions/addStudent';

class StudentInput extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        status: 'Full-time'
    }


    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state)
        this.setState({
            first_name:'',
            last_name:'',
            status:''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <label>First Name:</label>
                    <input onChange={this.handleOnChange} type='text' name='first_name' placeholder='First name' value={this.state.first_name}/>
                <label>Last Name:</label>
                    <input onChange={this.handleOnChange} type='text' name='last_name' placeholder='Last name' value={this.state.last_name}/>
                    <label>Status (Full-time or Part-Time):</label>
                    <input onChange={this.handleOnChange} type='text' name='status' placeholder='Full-time or Part-time' value={this.state.status}/>
                <input type='submit'/>
                
                </form>
            </div>

        )
    }


}



export default connect(null, {addStudent})(StudentInput);