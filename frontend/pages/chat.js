import { io } from "socket.io-client";
import { useEffect, useState } from 'react'
import { parseCookie } from "../helpers/parseCookie";

export default function Chat() {
  const socket = io('http://localhost:3001');
  const [messages, setMessages] = useState([])
  const [consent, setConsent] = useState({ from: { consent: false }, to: { consent: false } })

  useEffect(() => {
    let user_id_from_cookie = window.document.cookie ? JSON.parse(parseCookie(window.document.cookie).user).data.user_id : null

    console.log(user_id_from_cookie);


    socket.emit('getPartners', {
      from: {
        user_id: user_id_from_cookie
        // user_id: "a"
      },
      to: {
        user_id: '$2b$10$SYfsPih9S/.FMC9E/FeWkuDT8.lkE..x7ewu.0t4OmGb60s25RoO.'
        // user_id: query.userData.user_id
      }
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
