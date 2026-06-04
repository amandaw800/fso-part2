const Person = ({name, number, removePerson}) => {
  return (
    <div>
      {name} {number} <button onClick={removePerson}>Remove Person</button> 
    </div>
  )
}

export default Person