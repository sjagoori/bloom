import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import LoadingScreen from '@/components/loadingScreen/loadingScreen';
import Header from '../components/header/Header'
import Avatar from 'boring-avatars';
import Link from 'next/link'
import Badge from '@material-ui/core/Badge'
import sortID from '../utils/sortID'
import parseCookie from '@/utils/parseCookie';

export default function Chat() {
  const router = useRouter();
  const { user } = router.query;
  const [list, setList] = useState();
  const [requests, setRequests] = useState();
  const [view, setView] = useState()

  useEffect(async () => {
    let user_id_from_cookie = JSON.parse(parseCookie(window.document.cookie).user)

    const res = await fetch(`https://bloom.bloomingbooty.repl.co/getUserChat/${user_id_from_cookie}`)
      .then(res => res.json())
      .then(data => data)

    let requestList = Object.values(res.list[0]).map((key, index) => {
      let success = <UserCard data={key} key={index} link={sortID(user_id_from_cookie, key.user_id)} />

      let empty = <div key={index}>
        <h2>Requests</h2>
        empty
      </div>

      return typeof res.list[0][0] == "boolean" ? empty : success

    })

    let list = Object.values(res.requests[0]).map((key, index) => {
      let success = <div key={index}>
        {key.name}
      </div>

      let empty = <div key={index}>
        <h2>Ongoing chats</h2>
        empty
      </div>

      // TODO handle the backend type of the requestedList return
      return typeof res.requests[0][0] == "boolean" ? empty : success
    })

    console.log('user_id_from_cookie', user_id_from_cookie)
    console.log('res.list[0]', res.list[0])
    console.log('res.requests[0]', res.requests[0])

    setList(list)
    setRequests(requestList)
    setView(list)
  }, [])


  console.log(view)

  return (
    <>
      <Header name="Chats" isBlogs={false}>
        <Badge badgeContent={0} color="error">
          <button onClick={() => view == list ? setView(requests) : setView(list)}>Requests</button>
        </Badge>
      </Header>

      {view ? view : <LoadingScreen />}
    </>
  )
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
      <span>{props.data.name}</span>
    </a>
  </Link>
)

// Chat.getInitialProps = async (ctx) => {
//   const another = await ctx.req.headers.cookie;

//   if (typeof another === 'undefined') {
//     // On server
//     if (typeof window === 'undefined') {
//       ctx.res.writeHead(302, { location: '/' })
//       ctx.res.end()
//     } else {
//       // On client
//       Router.push('/')
//     }
//   }

//   return {}
// }