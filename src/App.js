import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      { name: "Kartik", age: 26 },
      { name: "Rutvij", age: 24},
      { name: "Pratik", age: 28}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Kartik</h1>
        <h1>Jadeja</h1>
        <button>Switch names</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
