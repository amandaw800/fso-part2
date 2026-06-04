import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import { Filter } from './components/Filter'
import {PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

import peopleService from './services/People'





const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filterInput, setFilterInput] = useState('')

  useEffect(() =>{
    peopleService.getAll().then(res =>{
      setPersons(res)
    })

  }, [])

  const removePerson = (id) => {
   // const filterOutId = persons.filter(p => p.id !== id) // keep all the ids that are not the id given
   // const copyPerson = {...filterOutId} //Make a copy of the state variable

   if(window.confirm("Do you want to delete?")){
        peopleService.remove(id).then(res =>{
      setPersons(persons.filter(p => p.id !== id))
    })

   } 



  }


  const addInfo = (event) => {
    event.preventDefault()

    //if the person exists, then get the person
    const findPerson = persons.find((p) => p.name === newName)
  

    if(findPerson){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const copyPerson = {...findPerson, number: newNumber}

        peopleService.update(findPerson.id, copyPerson)
        .then(res => { 
          setPersons(persons.map(p => p.id === findPerson.id ? res : p))

        })
        setNewName('')
        setNewNumber('')
        


  

      }

    } else {
          const personObject = {
      name: newName,
      number: newNumber
    }

    peopleService.create(personObject).then(per =>{
      setPersons(persons.concat(per))
      setNewName('')
      setNewNumber('')

    })



      
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
      <Persons filterInput={filterInput} persons={persons} removePerson={removePerson}/>
        

    </div>
  )
}

export default App