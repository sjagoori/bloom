import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";
import Header from "../components/header/Header";
import Avatar from "boring-avatars";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import topbarStyles from "../styles/Navigation.module.css";
import parseCookie from "../utils/parseCookie";

export default function Chat() {
  const router = useRouter();
  const { user } = router.query;
  const [list, setList] = useState();
  const [requests, setRequests] = useState();
  const [view, setView] = useState("list");

  useEffect(async () => {
    let user_id_from_cookie = JSON.parse(
      parseCookie(window.document.cookie).user
    );

    await fetch(
      `https://bloom.bloomingbooty.repl.co/getUserChat/${encodeURIComponent(
        user_id_from_cookie
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setList(
          data.chatList[0] 
          ? data.chatList[0].chats.map((key, index) => {
            return (
              <UserCard
                key={index}
                data={key}
                link={key.chat_id}
                receiver={key.to.identifier}
              />
            );
          })
          : <>empty</>
        );
        setRequests(
          data.requestList 
          ? data.requestList.map((key, index) => {
            return (
              <UserCard
                key={index}
                data={key}
                link={key.chat_id}
                receiver={key.to.identifier}
              />
            );
          })
          : <>empty</>
        );
      });
  }, []);

  console.log(view);

  let chatlist = requests && (
    <>
      <Header name="Chats" isBlogs={false}>
        {requests.length > 0 ? (
          <Badge badgeContent={0} color="error">
            <button
              onClick={() => setView(view == "list" ? "requests" : "list")}
            >
              Requests
            </button>
          </Badge>
        ) : null}
      </Header>
      {list}
    </>
  );

  let requestList = (
    <>
      <nav>
        <button
          type="button"
          onClick={() => setView(view == "list" ? "requests" : "list")}
        >
          <img src="/icons/chevron-icoon.svg" alt=">" />
        </button>
        <h1>Requests</h1>
      </nav>
      {requests}
    </>
  );

  return (
    <>{!list ? <LoadingScreen /> : view == "list" ? chatlist : requestList}</>
  );
}

const UserCard = (props) => (
  <Link
    href={{
      pathname: `/chatbox/${encodeURIComponent(props.link)}`,
      query: { receiver: props.receiver },
    }}
  >
    <a>
      <Avatar
        size={60}
        name={props.data.to.data.name}
        variant="beam"
        colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
      ></Avatar>
      <span>{props.data.to.data.name}</span>
    </a>
  </Link>
);
