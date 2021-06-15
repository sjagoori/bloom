import { useRouter } from "next/router";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import TopBar from "../../components/topbar/TopBar";
import parseCookie from "../../utils/parseCookie";
import sortID from "../../utils/sortID";
export default function ChatBox() {
  const router = useRouter();
  const { user } = router.query;
  const receiver = router.query.receiver ?? router.query.receiver;
  const socket = io("https://bloom.bloomingbooty.repl.co");
  const [messages, setMessages] = useState([]);
  const [partners, setPartners] = useState();

  useEffect(() => {
    let user_id_from_cookie = JSON.parse(
      parseCookie(window.document.cookie).user
    );

    socket.emit("getPartners", {
      from: {
        user_id: user_id_from_cookie,
        consent: true,
      },
      to: {
        user_id: receiver,
        consent: false,
      },
      pair: sortID(user_id_from_cookie, receiver),
    });

    socket.on("setPartners", (partner) => {
      console.log("setPartners", partner);
      setPartners(partner);
    });

    socket.on("message", (message) => {
      console.log(message);
      setMessages((messages) => [...messages, ...[message]]);
    });
  }, []);

  function handleChat(e) {
    e.preventDefault();
    socket.emit("message", {
      partners: partners,
      message: e.target[1].value,
      timestamp: +new Date(),
      chat_id: partners.pair,
      sender: {
        user_id: partners.from.user_id,
        name: partners.from.name,
      },
    });
  }

  // console.log("messages:", messages);

  return (
    <section>
      <TopBar />
      <form onSubmit={handleChat}>
        <div>
          <fieldset>Chat {partners && "met " + partners.to.name}</fieldset>
          <ol>
            {messages.map((key, index) => {
              return <li key={index}>{key.sender.name}: {key.message}</li>;
            })}
          </ol>
        </div>
        <input type="text" name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
