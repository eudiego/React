import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
        {name: 'Diego', age: 33},
        {name: 'Jessica', age: 32 }
      ]
  }

  switchNameHadler = () => {
    //console.log('was ok');
    this.setState(
      {
        persons: [
          {name: 'Diego', age: 30},
          {name: 'Jessica', age: 22 }
        ]
      }
    )
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          {name: 'Diego', age: 30},
          {name: event.target.value, age: 22 }
        ],
        showPersons: false
      }
    )
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    
    const style ={
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

  return (
    <div className="App">
      <button style={style} onClick={this.tooglePersonsHandler}>Switch Name</button>
      { this.state.showPersons ? 
          <div >
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHadler}
              changed={this.nameChangeHandler}>I like to code.
              </Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}>I like to work.</Person>
          </div> : null
      }
    </div>
    //React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'This is Diego Again!!'))
    );
  }
}

export default App;
