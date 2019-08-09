import React from 'react';
import Radium from 'radium';

import classes from './Cockpit.css';

const Cockpit = props => {
  let p = null;
  const suseepadding = '8px';
  let lss = 'red';
  let lal = 'yellow';
  const style = {
    backgroundColor: 'blue',
    color: '#FFFFFF',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'red' // With the use of radium we can use pseudo selectors in inline-styling
    }
  };
  if (props.showPersons) {
    style.backgroundColor = 'pink';
    style.color = 'black';
    style[':hover'] = {
      backgroundColor: 'yellow'
    };
    lal = 'white';
    lss = 'black';
  }
  let value = props.showPersons ? 'Hide Details' : 'Show Details';
  let personListLength = props.persons.length;

  const assignClasses = [];
  if (personListLength <= 2) {
    assignClasses.push(classes.red);
  }

  if (personListLength <= 1) {
    assignClasses.push(classes.bold);
  }

  if (personListLength === 0) {
    assignClasses.splice(0, 1);
    assignClasses.push(classes.grey);
    personListLength = 'Empty(Reload the page)';
  }
  const combinedClass = assignClasses.join(' ');
  return (  
    // instead of a wrapping <div></div> we can use Higher order components
    // IN REACT 16.8, we have <React.Fragment>
    <div>
      <h1 style={{ color: `${lss}` }}>{props.appTitle}</h1>
      <button
        style={{
          backgroundColor: `${lss}`,
          color: `${lal}`,
          padding: `${suseepadding}`,
          cursor: style.cursor
        }}
        onClick={() => props.changeName(123, 'suseendharlal', 22)}
      >
        Change me!
      </button>
      <button style={style} onClick={props.showDetailedView}>
        {/* dynamically assigning button name */}
        {value}
      </button>
      <div className={combinedClass}>The list is:{personListLength}</div>
      <button
        onClick={() =>
          props.addPerson(
            (p = {
              id: 4,
              fname: '',
              lname: '',
              age: 20
            })
          )
        }
      >
        Add Person
      </button>
    </div>
  );
};

export default Radium(Cockpit);
