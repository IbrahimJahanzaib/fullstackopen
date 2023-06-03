const Total = ({parts}) => {
    const total = parts.reduce((total, item) => {
      return total + item.exercises
    }, 0)
    return(
      <>
        <b>Total of {total} exercises.</b>
      </>
    )
  }

export default Total