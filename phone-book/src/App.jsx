import { useState } from 'react'

const Person = ({name}) => {
  return (
    <div>
      {name}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    //if that a person has the same name as the newName, then we know that there's a duplicate, so we say it already exists
    const nameExists = persons.some((person) => person.name === newName)

    if(nameExists){
      alert(`${newName} is already added to the phonebook`)

    } else {
          const personObject = {
      name: newName,
      id: String(persons.length+1)
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    

      
    }

  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <Person key={person.id} name={person.name}/>)}
        
      </div>
    </div>
  )
}

export default App