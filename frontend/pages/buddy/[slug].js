import { useRouter } from "next/router";
import Avatar from 'boring-avatars';
import Link from 'next/link';
import styles from './[slug].module.css';


export default function Buddy({ data }) {
  const userData = data.data.data;
  const router = useRouter();
  const { address } = router.query;

  console.log(userData.name)

  return (
    <>
      <main className={styles.profileContainer}>
        <nav>
          <a onClick={() => router.back()}>
            <img className={styles.navIcon} src="/icons/chevron-icoon.svg" alt="" />
          </a>
        </nav>
        <article>
          <section className={styles.userCard}>
            <div className={styles.pictogramContainer}>
              <Avatar
                size={60}
                name={userData.name}
                variant="beam"
                colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
              ></Avatar>
            </div>
            <div className={styles.userInformation}>
              <h2>{userData.name}</h2>
              <p className={styles.profileDetail}><span className={styles.icon}><img src="/icons/label-icoon.svg" alt="t" /></span><span>{userData.kankerType}</span></p>
              <p className={styles.profileDetail}><span className={styles.icon}><img src="/icons/leeftijd-icoon.svg" alt="t" /></span><span>{getAge(userData.birthDate)} jaar</span></p>
            </div>
            <Link href={{ pathname: '/chat', query: { user_id: userData.user_id } }}><button className={styles.ctaMessage}><span>bericht</span><span><img src="/icons/chevron-icoon.svg" alt=">" /></span></button></Link>
          </section>
          <section className={styles.userBiography}>
            <p className={styles.sectionTitle}>Biografie</p>
            <p>{userData.about}</p>
          </section>
          <section className={styles.oncospecific}>
            <p className={styles.sectionTitle}>Oncospecifiek</p>
            <article className={styles.oncospecificInformation}>
              <span>Type Kanker</span><p>{userData.kankerType}</p>
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

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://bloom.bloomingbooty.repl.co/getUser/${params.slug}`)

  const data = {
    data: await res.json()
  };

  return { props: { data } };
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