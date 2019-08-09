import React from 'react';
import Person from './Person/Person';
const Persons = props => {
  return props.persons.map((person, index) => {
    return (
      <Person
        change1={event => props.changed(event, person.id)} // event is the keyboard typing event
        // click={()=>props.deletePerson(index)} // 1st approach
        click={props.deletePerson.bind(this, index)} // 2nd approach
        id={person.id}
        firstname={person.fname}
        lastname={person.lname}
        age={person.age}
        key={index}
      />
    );
  });
};
export default Persons;
