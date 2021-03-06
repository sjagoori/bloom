import LoadingScreen from "@/components/loadingScreen/loadingScreen";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Header from "../../components/header/Header";
import TopBar from "../../components/topbar/TopBar";
import dialogStyles from "../../styles/ChatDialog.module.css";
import parseCookie from "../../utils/parseCookie";
import sortID from "../../utils/sortID";


export default function ChatBox() {
  const router = useRouter();
  const { user } = router.query;
  const receiver = router.query.receiver ?? router.query.receiver;
  const socket = io("https://bloom.bloomingbooty.repl.co");
  const [messages, setMessages] = useState([]);
  const [partners, setPartners] = useState();
  let mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
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
        setMessages((messages) => [...messages, ...[message]]);
      });

      socket.on("log", (log) => console.log("log", log));
      socket.on("setMessages", (a) => {
        if (messages.length == 0)
          setMessages((messages) => [...messages, ...a]);
      });
      mounted.current = true;
    } else {
      socket.close();
    }

    return () => {
      socket.close();
    };
  }, []);

  function handleChat(e) {
    e.preventDefault();
    socket.emit("message", {
      message: e.target[0].value,
      timestamp: +new Date(),
      chat_id: partners.pair,
      sender: {
        user_id: partners.from.user_id,
        name: partners.from.name,
      },
    });
  }

  console.log(messages);

  return (
    <section className={dialogStyles.chatContainer}>
      <TopBar />

      {partners ? (
        <>
          <Header
            name={"Chat" + (partners && " met " + partners.to.name)}
            isBlogs={false}
          />
          <ol className={dialogStyles.chatBox}>
            {messages.map((key, index) => {
              return (
                <li key={index} className={dialogStyles.message}>
                  {key.sender.name}: {key.message}
                </li>
              );
            })}
          </ol>
          <form onSubmit={handleChat}>
            <input type="text" name="message" id="message" placeholder="Typ een chatbericht..." />
            <button type="submit">
              <img src="/icons/chevron-icoon.svg" alt="send" />
            </button>
          </form>
        </>
      ) : (
        <LoadingScreen />
      )}
    </section>
  );
}
