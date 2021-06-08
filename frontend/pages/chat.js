import { io } from "socket.io-client";
import { useEffect, useState } from 'react'

export default function Chat() {
  const socket = io('http://localhost:3001');
  const [messages, setMessages] = useState([])
  const [consent, setConsent] = useState({ from: { consent: false }, to: { consent: false } })

  useEffect(() => {
    socket.emit('getPartners', {
      from: "something from the cookie",
      to: 'someone else their userid we get form the buddies list'
    })

    socket.on('setPartners', partner => { setConsent(partner) })
    socket.on('loadChatHistory', message => { setMessages(messages => [...messages, ...[message]]) })
  }, [])

  console.log(consent);

  function handleChat(e) {
    e.preventDefault();

    socket.emit('message', {
      from: 'me',
      to: 'otherperson',
      consent: {
        from: {
          identifier: 'me',
          consent: true
        },
        to: {
          identifier: 'otherperson',
          consent: false
        },
      },
      message: e.target[1].value,
      timestamp: +new Date
    })
  }

  // console.log(messages);

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
        {consent.from.consent && consent.to.consent
          ? <> <input type="text" name="message" id="message" />
            <button type="submit">Send</button></>
          : <p>Yall shall not</p>}

      </form>
    </aside>
  )
}