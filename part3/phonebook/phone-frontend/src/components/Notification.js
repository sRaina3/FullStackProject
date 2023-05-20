const Notification = ({message}) => {
  const notifStyle = {
    color: 'green',
    fontSize: 16,
    borderStyle: 'solid',
    backgroundColor: 'lightGray'
  }
  let styler = {}
  if (message != null) {
    styler = notifStyle
  }
  return (
    <div style={styler}>
      {message}
    </div>
  )
}
export default Notification