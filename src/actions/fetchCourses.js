export const fetchCourses = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_COURSES'})
        fetch('http://localhost:3000/api/v1/courses')
        .then(response => {
            return response.json()})
        .then(courses => {
            dispatch({type: 'FETCH_COURSES', payload: courses})
        })
    }
}