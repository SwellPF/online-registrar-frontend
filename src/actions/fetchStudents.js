export function fetchStudents(action) {
    fetch('http://localhost:3000/api/v1/students')
    .then(response => response.json())
    .then(data => console.log(data.data[0].attributes))


}