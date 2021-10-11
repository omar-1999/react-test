import { store } from 'react-notifications-component';
import 'animate.css/animate.min.css';
import 'animate.css/animate.compat.css'

const ReactNotifications = (title, message, type) => {
  return (
    store.addNotification({
      title: `${title}!`,
      message: `${message}.`,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    })
  )
}

export default ReactNotifications;