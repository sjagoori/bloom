import { useRouter } from 'next/router';
import { io } from "socket.io-client";
import { useEffect, useState } from 'react'
import TopBar from "../../components/topbar/TopBar";
import parseCookie from '../../utils/parseCookie'

export default function ChatBox() {
  const router = useRouter();
  const { user } = router.query
  console.log("receiver", router.query.receiver)
  const receiver = router.query.receiver;
  const socket = io('https://bloom.bloomingbooty.repl.co');
  const [messages, setMessages] = useState([])
  const [consent, setConsent] = useState({ from: { consent: false }, to: { consent: false } })


  useEffect(() => {
    let user_id_from_cookie = JSON.parse(parseCookie(window.document.cookie).user)

    socket.emit('getPartners', {
      from: {
        user_id: user_id_from_cookie
      },
      to: {
        user_id: receiver
      }
    })

    socket.on('setPartners', partner => {
      console.log("partner", partner)

      setConsent({
        from: {
          consent: partner.from.consent,
          identifier: decodeURIComponent(partner.from.identifier)
        },
        to: {
          consent: partner.to.consent,
          identifier: decodeURIComponent(partner.to.identifier)
        },
        chat_id: decodeURIComponent(partner.chat_id)
      })
    })
    socket.on('loadChatHistory', message => { setMessages(messages => [...messages, ...[message]]) })
  }, [])



  function handleChat(e) {
    e.preventDefault();

    socket.emit('message', {
      from: consent.from.identifier,
      to: consent.to.identifier,
      consent: {
        from: {
          identifier: consent.from.identifier,
          consent: true
        },
        to: {
          identifier: consent.to.identifier,
          consent: false
        },
      },
      message: e.target[1].value,
      timestamp: +new Date,
      chat_id: decodeURIComponent(consent.chat_id)
    })
  }

  return (
    <section>
      <TopBar />
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
    </section>
  )
}
