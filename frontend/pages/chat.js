import { io } from "socket.io-client";
import { useEffect, useState } from 'react'

export default function Chat() {
  const socket = io('http://localhost:3001');
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('receive', message => { setMessages(messages => [...messages, ...[message]]) })
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

  console.log(messages);

  return (
    <aside>
      <form onSubmit={handleChat}>
        <div>
          <fieldset>Chat</fieldset>
          <ol>
            {messages.map((key, index) => {
              return <li key={index}>
                {key.message}
              </li>
            })}
          </ol>
        </div>
        <input type="text" name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </aside>
  )
}