const Numbers = ({name, number, id, toggleDelete}) => {
    return(
        <li key={id}>{name} - {number} <button onClick={toggleDelete}>delete</button></li>
    )
}

export default Numbers