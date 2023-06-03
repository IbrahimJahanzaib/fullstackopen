import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Numbers from './components/Numbers'
import Notification from './components/Notification'
import contact from './services/contact'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    contact
      .getAll()
      .then(allContacts => {
        setPersons(allContacts)
      })
  }, [])

  const addNew = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
  
    const personExists = persons.find(person => person.name === newName)

    if(personExists) {
      const confirmUpdate = window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`);
      if(confirmUpdate){
        const updated = {...personExists, number:newNumber}
        contact
          .update(personExists.id, updated)
          .then(updated => {
            setPersons(persons.map(person => person.id === updated.id ? updated : person))
          })
        setMessage(`Updated ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
    } else {
      contact
        .create(newPerson)
        .then(created => {
          setPersons(persons.concat(created))
        })
      setMessage(`Added ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }  
    setNewName('')
    setNewNumber('')
      
  }

  const filteredPerson = persons.filter(person => 
    person.name && person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const toggleDelete = (id) => {
    const contactToDelete = persons.find(person => person.id === id )

    if(window.confirm(`Delete ${contactToDelete.name}`)) {
      contact
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        contact
          .getAll()
          .then(allContacts => setPersons(allContacts))
        setMessage(`Information of ${contactToDelete.name} has already been removed from the server.`)
        
      })
    }
    
  }
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message}/>
      <Filter persons={persons} filter={filter} setFilter={setFilter}/>
      <Add addNew={addNew} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <ul>
          {filteredPerson.map(person => 
          <Numbers 
            key={person.id}
            name={person.name} 
            number={person.number} 
            id={person.id}
            toggleDelete={() => toggleDelete(person.id)}
            />)}
      </ul>
      
    </div>
  )
}

export default App