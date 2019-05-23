import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kartik</h1>
      <h1>Jadeja</h1>
      <Person name="kartik" age="26"/>
      <Person name="Rutvij" age="24" >My Hobbies: Racing</Person>
      <Person name="Pratik" age="24" />
    </div>
  );
}

export default App;
