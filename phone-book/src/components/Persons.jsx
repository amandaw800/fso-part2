import Person from './Person'

export const Persons = ({filterInput, persons}) => {
  
  const filterInputs = () => {
   return  persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase()))

  }

  return (
          <div>
        {filterInputs().map(person => <Person key={person.id} name={person.name} number={person.number}/>)}
        
      </div>
  )

}