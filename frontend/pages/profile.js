import Link from 'next/link';
import UserStyles from '../styles/User.module.css'
import Avatar from 'boring-avatars';
import getAge from '../utils/age';
import Header from '../components/header/Header'
import { useEffect, useState } from 'react';
import parseCookie from '../utils/parseCookie'
import LoadingScreen from '../components/loadingScreen/loadingScreen';

export default function Profile() {
  const [data, setData] = useState()

  useEffect(async () => {
    let content = await fetch(`https://bloom.bloomingbooty.repl.co/getUser/${JSON.parse(parseCookie(window.document.cookie).user)}`)
      .then(res => res.json())
      .then(data => data.data);
    console.log(content);
    setData(content)
  }, [])


  return (
    <>
      <Header name="Profile" isBlogs={false} />
      {data ? <UserProfile data={data} /> : <LoadingScreen />}
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
        <p><span><img src="/icons/leeftijd-icoon.svg" />{getAge(props.data.birthDate)} jaar</span></p>
        <p><span><img src="/icons/label-icoon.svg" />{props.data.kankerType}</span></p>
      </div>
    </section>
    <section>
      <h2>Biografie</h2>
      <p>{(props.data.about === null) ? 'User has not written a bio' : props.data.about}</p>
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
