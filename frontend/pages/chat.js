import { io } from "socket.io-client";
import { useEffect } from 'react'

export default function Chat() {
  const socket = io('http://localhost:3001');

  useEffect(() => {
    //io even subscribe to room
  }, [])


  function handleChat(e) {
    e.preventDefault();

    socket.emit('message', {
      from: 'me',
      to: 'user',
      message: e.target[1].value,
      timestamp: +new Date
    })
  }

  return (
    <aside>
      <form onSubmit={handleChat}>
        <div>
          <fieldset>Chat</fieldset>
          <ol></ol>
        </div>
        <input type="text" name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </aside>
  )
}