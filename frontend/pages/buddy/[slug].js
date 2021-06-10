import Avatar from 'boring-avatars';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './[slug].module.css';


const props = {
  data: {
    _id: '60b8e9c2aea08a5f61999c19',
    name: 'Lea Bogaarts',
    birthDate: '2000-06-05',
    kankerType: ['Borstkanker', 'Nierkanker'],
    about: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`
  }
}

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

export default function Buddy({ data }) {
const router = useRouter()

  return (
    <>
    <main className={styles.profileContainer}>
      <nav>
        <a onClick={() => router.back()}>
          <img className={styles.navIcon}src="/icons/chevron-icoon.svg" alt="" />
        </a>
      </nav>
      <article>
        <section className={styles.userCard}>
          <div className={styles.pictogramContainer}>
            <Avatar 
            size={60}
            name={props.data.name}
            variant="beam"
            colors={["#FEE89E","#F07A06","#F07903","#3CB2FF","#CE6F88"]}
            ></Avatar>
          </div>
          <div className={styles.userInformation}>
            <h2>{props.data.name}</h2>
            <p className={styles.profileDetail}><span className={styles.icon}><img src="/icons/label-icoon.svg" alt="t" /></span><span>{props.data.kankerType[0]}</span></p>
            <p className={styles.profileDetail}><span className={styles.icon}><img src="/icons/leeftijd-icoon.svg" alt="t" /></span><span>{getAge(props.data.birthDate)} jaar</span></p>
          </div>
          <Link href={{pathname: '/chat', query: {user_id: props.data._id}}}><button className={styles.ctaMessage}><span>bericht</span><span><img src="/icons/chevron-icoon.svg" alt=">" /></span></button></Link>
        </section>
        <section className={styles.userBiography}>
          <p className={styles.sectionTitle}>Biografie</p>
          <p>{props.data.about}</p>
        </section>
        <section className={styles.oncospecific}>
          <p className={styles.sectionTitle}>Oncospecifiek</p>
          <article className={styles.oncospecificInformation}>
            <span>Type Kanker</span><p>{props.data.kankerType}</p>
            <span>Fase</span><p>In remissie sinds x jaar</p>
            <span>Ziekenhuis</span><p>HMC Westeinde</p>
            <span>Diagnosejaar</span><p>2017</p>
          </article>
        </section>
        <section className={styles.profileQuestions}>

        </section>
      </article>
    </main>
    </>
  )
}