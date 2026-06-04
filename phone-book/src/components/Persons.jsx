import Person from './Person'

export const Persons = ({filterInput, persons, removePerson}) => {
  
const filterInputs = () => {
  const query = filterInput.toLowerCase()
  return persons.filter(person =>
    (person.name ?? "").toLowerCase().includes(query)
  )
}


  return (
          <div>
        {filterInputs().map(person => <Person key={person.id} name={person.name} number={person.number} removePerson={() => removePerson(person.id)}/>)}
        
      </div>
  )

}