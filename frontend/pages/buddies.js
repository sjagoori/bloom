import { useState } from 'react';
import Link from 'next/link'
import Avatar from 'boring-avatars';
import buddyStyles from '../styles/Buddy.module.css';
import buddyListStyles from '../styles/BuddyList.module.css'
import buddyCardStyles from '../styles/BuddyCard.module.css'

const filter = {
  All: () => true,
  SameType: (users, user) => { users.filter(users => users.kankerType[0] == user.kankerType[0]) }
}

export default function Buddies(props) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <header className={buddyStyles.topBar}>
        <h1>Buddy zoeken</h1>
        <button
          onClick={() => setModalVisible()}
        ><img src="./icons/filter-icoon.svg" alt="Filter" /></button>
      </header>
      <BuddyList data={props.data.data} />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://bloom.bloomingbooty.repl.co/getAllUsers`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return { props: { data } }
}

const BuddyList = (users) => (
  <main className={buddyListStyles.buddyContainer}>
    <section className={buddyListStyles.cardLayout}>
      {Object.values(users.data).map((key, index) => {
        // console.log(key);
        return <BuddyCard key={index} data={{ name: key.name, user_id: key.user_id, kankerType: key.kankerType, birthDate: getAge(key.birthDate) }} />
      })}
    </section>
  </main>
)

const BuddyCard = (props) => (
  <Link href={{ pathname: `/buddy/${encodeURIComponent(props.data.user_id)}` }}>
    <article className={buddyCardStyles.card}>
      <section className={buddyCardStyles.profileImage}>
        <Avatar
          size={60}
          name={props.data.name}
          variant="beam"
          colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
        ></Avatar>
      </section>
      <section className={buddyCardStyles.profileInformation}>
        <h1 className={buddyCardStyles.username}>{props.data.name}</h1>
        {(props.data.kankerType !== undefined) ? <p className={buddyCardStyles.profileDetail}><span className={buddyCardStyles.icon}><img src="./icons/label-icoon.svg" alt="t" /></span><span>{props.data.kankerType[0]}</span></p> : undefined}
        <p className={buddyCardStyles.profileDetail}><span className={buddyCardStyles.icon}><img src="./icons/leeftijd-icoon.svg" alt="t" /></span><span>{props.data.birthDate} jaar</span></p>
        <span className={buddyCardStyles.pointer}><img src="/icons/chevron-icoon.svg" alt="" /></span>
      </section>
    </article>
  </Link>
)

/**
 * @title Get age in year format
 * @description Gets date object from user and transform it in a numerical value
 * @param {Date} birthday
 * @returns {Number} Age
 */
function getAge(birthday) {
  const birthDate = new Date(birthday)
  const today = new Date()
  return today.getFullYear() - birthDate.getFullYear()
}