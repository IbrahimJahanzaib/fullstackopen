const Notification = ({ message }) => {

    if (message === null) {
      return null
    }

    const notificationClassName = message.includes('removed')
        ? 'error'
        : 'success';
  
    return (
      <div className={notificationClassName}>
        {message}
      </div>
    )
  }

export default Notification