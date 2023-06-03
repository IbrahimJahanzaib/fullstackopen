const Add = ({addNew, newName, newNumber, setNewName, setNewNumber}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return(
        <div>
            <h2>Add a new</h2>
            <form onSubmit={addNew}>
            <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}/>
                </div>
                <div>
                number: <input 
                    value={newNumber}
                    onChange={handleNumberChange}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Add