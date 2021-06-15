import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import LoadingScreen from "@/components/loadingScreen/loadingScreen";
import Header from "../components/header/Header";
import Avatar from "boring-avatars";
import Link from "next/link";
import Badge from "@material-ui/core/Badge";
import sortID from "../utils/sortID";
import parseCookie from "../utils/parseCookie";

export default function Chat() {
  const router = useRouter();
  const { user } = router.query;
  const [list, setList] = useState();
  const [requests, setRequests] = useState();
  const [view, setView] = useState();

  useEffect(async () => {
    let user_id_from_cookie = JSON.parse(
      parseCookie(window.document.cookie).user
    );

    await fetch(
      `https://bloom.bloomingbooty.repl.co/getUserChat/${user_id_from_cookie}`
    )
      .then((res) => res.json())
      .then((data) => setList(data.chatList));
  }, []);

  let onGoingChats =
    list &&
    list.map((key, index) => {
      return <UserCard key={index} data={key} link={key.chat_id} />;
    });

  return (
    <>
      <Header name="Chats" isBlogs={false}>
        <Badge badgeContent={0} color="error">
          <button
            onClick={() => (view == list ? setView(requests) : setView(list))}
          >
            Requests
          </button>
        </Badge>
      </Header>

      {onGoingChats ? onGoingChats : <LoadingScreen />}
    </>
  );
}

const UserCard = (props) => (
  <Link href={`/chatbox/${props.link}`}>
    <a>
      <Avatar
        size={60}
        name={props.data.name}
        variant="beam"
        colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
      ></Avatar>
      <span>{props.data.to.data.name}</span>
    </a>
  </Link>
);
