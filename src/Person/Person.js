import React from 'react';
import './Person.css';
//import Radium from 'radium'
import styles from './person.module.css'

const person = (props) => {

/*     const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }; */


    return (
        //<div className="Person" style={style}>
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} person and im {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} ></input>
        </div>
    )
};

//export default Radium(person);
export default person;