import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
      persons: [
        {id:1, name: 'Diego', age: 33},
        {id:2, name: 'Jessica', age: 32 }
      ]
  }
/* 
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
  } */

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]};

      person.name = event.target.value;

      const persons = [... this.state.persons];
      persons[personIndex] = person; 

    
    this.setState(
      {
        persons: persons
      }
    )
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice(); //Make a copy of the object, not by ref
    persons.splice(personIndex,1);//Remove 1 person from the array.
    this.setState({persons: persons});
  }

  render() {
    
    //Using radium component :hover
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} 
            key={person.id} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.nameChangeHandler(event, person.id)}  />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHadler}
            changed={this.nameChangeHandler}>I like to code.
            </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>I like to worksssss.</Person> */}
        </div>
      )

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //Changing classes dynamically
    let classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if (this.state.persons <= 1)
    {
      classes.push('bold');
    }

    //console.log(classes);
    //console.log(classes.join(' ')); Join the item of array in a string.

  return (
    <StyleRoot> 
      <div className="App">
        <h1 className={classes.join(' ')} >My react app</h1> 
        <button style={style} onClick={this.tooglePersonsHandler}>Toogle List</button>
          {persons}
      </div>
    </StyleRoot>
/* one way to implement conditional content
{       { this.state.showPersons ? 
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
 }*/    //React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'This is Diego Again!!'))
    );
  }
}

export default Radium(App);