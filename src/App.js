import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
      fetch('http://localhost:3000/api/v1/students')
      .then(response => response.json())
      .then(data => console.log(data.data[0].attributes))
  }


  render() {
    return (
      <div className = "App">
        App
      </div>
    );
  }
}

export default App;
