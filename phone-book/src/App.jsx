import { useState } from 'react'
import Person from './components/Person'
import { Filter } from './components/Filter'
import {PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'






const App = () => {
  const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filterInput, setFilterInput] = useState('')


  const addInfo = (event) => {
    event.preventDefault()

    //if that a person has the same name as the newName, then we know that there's a duplicate, so we say it already exists
    const nameExists = persons.some((person) => person.name === newName)

    if(nameExists){
      alert(`${newName} is already added to the phonebook`)

    } else {
          const personObject = {
      name: newName,
      id: String(persons.length+1),
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    

      
    }

  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) =>{
    setFilterInput(event.target.value)

  }

 



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterInput} onChange={handleFilterInput}/>
      <h2>add a new</h2>
      <PersonForm addInfo={addInfo} newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} />
      
      <h2>Numbers</h2>
      <Persons filterInput={filterInput} persons={persons}/>
        

    </div>
  )
}

export default App