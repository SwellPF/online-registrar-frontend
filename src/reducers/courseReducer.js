export default function courseReducer(state = {courses: []}, action ) {
   
    switch(action.type) {
        case 'FETCH_COURSES': 
            return {courses: action.payload}
   
        default: 
            return state;
    }
}