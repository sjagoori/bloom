import { useRouter } from 'next/router';
import Avatar from 'boring-avatars';
import Link from 'next/link';
import getAge from '../../utils/age';
import TopBar from '../../components/topbar/TopBar.js';
import UserStyles from '/styles/User.module.css';
import sortID from '../../utils/sortID'
import { useEffect, useState } from 'react';
import parseCookie from '../../utils/parseCookie'

export default function User({ data }) {
  const router = useRouter()
  const { user } = router.query
  const userData = data.data.data
  const [link, setLink] = useState()

  useEffect(() => {
    let ownCookie = JSON.parse(parseCookie(window.document.cookie).user)
    console.log(ownCookie)
    console.log(userData.user_id)

    let link = sortID(ownCookie, userData.user_id)
    setLink(link);
  }, [])

  console.log(user)
  console.log(userData)

  return (
    <>
      <TopBar />
      <UserProfile data={userData} link={link} />
    </>
  )
}

const UserProfile = (props) => (
  <main className={UserStyles.profileContainer}>
    <section className={UserStyles.userCard}>
      <div className={UserStyles.imageContainer}>
        <Avatar
          size={60}
          name={props.data.name}
          variant="beam"
          colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
        ></Avatar>
      </div>
      <div className={UserStyles.userInformation}>
        <h2>{props.data.name}</h2>
        <p><span><img src="/icons/label-icoon.svg" />{props.data.kankerType}</span></p>
        <p><span><img src="/icons/leeftijd-icoon.svg" />{getAge(props.data.birthDate)} jaar</span></p>
      </div>
      <Link href={{ pathname: `/chatbox/${props.link}`, query: { receiver: props.data.user_id } }}>
        <button className={UserStyles.chatButton}>
          <span>Bericht</span>
          <span><img src="/icons/chevron-icoon.svg" /></span>
        </button>
      </Link>
    </section>
    <section>
      <h2>Biografie</h2>
      <p>{(props.data.about === null) ? 'template bio' : props.data.about}</p>
    </section>
    <section className={UserStyles.oncoSec}>
      <h2>Oncospecifiek</h2>
      <article className={UserStyles.oncoInfo}>
        <span>Type Kanker</span><p>{props.data.kankerType}</p>
        <span>Fase</span><p>in remissie sinds jaar</p>
        <span>Ziekenhuis</span><p>VU Medisch Centrum</p>
        <span>Diagnose Jaar</span><p>2014</p>
      </article>
    </section>
  </main>
)

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://bloom.bloomingbooty.repl.co/getUser/${params.user}`)

  const data = {
    data: await res.json()
  };

  return { props: { data } };
}