import React, { Component } from 'react'
import Radium from 'radium'

import classes from './App.css' // classes our wish to name it
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 1, fname: 'susee', lname: 'lal', age: 20 },
      { id: 2, fname: 'shyam', lname: 'lal', age: 23 },
      { id: 3, fname: 'sridhar', lname: 'lr', age: 33 }
    ],

    showPerson: false
  }

  changeName = (newId, newname, newage) => {
    this.setState({
      persons: [
        { id: newId, fname: newname, lname: 'lal', age: newage },
        { id: 34, fname: 'shyam', lname: 'lal', age: 24 },
        { id: 64, fname: 'sridhar', lname: 'lr', age: newage }
      ]
    })
  }

  showDetailedView = () => {
    // const doesShow = this.state.showPerson
    // this.setState({ showPerson: !this.state.showPerson}) // should not directly access state
    this.setState((prevState, props) => {
      // use this method of accessing(BEST PRACTICE)
      return {
        showPerson: !prevState.showPerson
      }
    })
  }
  deleteName = pindex => {
    // const persons = this.state.persons.splice(); // Alternative method
    const persons = [...this.state.persons]
    persons.splice(pindex, 1)
    this.setState({ persons }) // persons: persons SAME
  }
  typeNewName = (event, id) => {
    console.log(event,'df',id);
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    console.log(personIndex);
    const person = { ...this.state.persons[personIndex] }
    person.fname = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
    // this.setState({ persons }) // persons: persons SAME
  }

  createPerson = person => {
    let persons = [...this.state.persons]
    persons.push(person)
    this.setState({ persons })
  }

  render() {
    const lrs = '2px solid blue'
    let detailedView = null
    let cockpit = null
    if (this.state.showPerson) {
      detailedView = (
        <Persons
          persons={this.state.persons}
          changed={this.typeNewName}
          deletePerson={this.deleteName}
        />
      )
    }
    cockpit = (
      <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPerson}
        persons={this.state.persons}
        changeName={this.changeName}
        showDetailedView={this.showDetailedView}
        addPerson={this.createPerson}
      />
    )
    return (
      <div className={classes.App} style={{ border: `${lrs}` }}>
        {/* dynamically assigning child component */}
        {cockpit}
        {detailedView}
      </div>
    )
  }
}

export default Radium(App)
