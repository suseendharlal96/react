import React from 'react'
import classes from './Person.css'
import Radium from 'radium'
import PropTypes from 'prop-types'

import './Person.css'
const Person = props => {
  return (
    <div className={classes.Person}>
      ID:{props.id}
      <p onClick={props.click}>
        my firstname is {props.firstname} and my last name is {props.lastname}{' '}
        and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        placeholder="type to see the change..."
        autoFocus
        onChange={props.change1}
        value={props.firstname}
      />
    </div>
  )
}

// Validating proptype
Person.propTypes = {
  id: PropTypes.number,
  click: PropTypes.func,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number
}
export default Radium(Person)
