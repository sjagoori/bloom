import Avatar from 'boring-avatars';
import Link from 'next/link';
import styles from "./BuddyCard.module.css";

export default function BuddyCard(props) {
  return (
    <>
    <Link href={{pathname: `/buddy/${props.name}` }}>
      <article className={styles.card}>
        <section className={styles.profileImage}>
        <Avatar 
          size={60}
          name={props.name}
          variant="beam"
          colors={["#FEE89E","#F07A06","#F07903","#3CB2FF","#CE6F88"]}
        ></Avatar>
        </section>
        <section className={styles.profileInformation}>
          <h1 className={styles.username}>{props.name}</h1>
          {(props.kankerType !== undefined) ? <p className={styles.profileDetail}><span className={styles.icon}><img src="./icons/label-icoon.svg" alt="t" /></span><span>{props.kankerType[0]}</span></p> : undefined}
          <p className={styles.profileDetail}><span className={styles.icon}><img src="./icons/leeftijd-icoon.svg" alt="t" /></span><span>{props.birthDate} jaar</span></p>
          <span className={styles.pointer}><img src="/icons/chevron-icoon.svg" alt="" /></span>
        </section>
      </article>
    </Link>
    </>
  )
}

/**
 * @title getServerSideProps
 * @description retrieve data from the backend and return is as json
 */
// export async function getServerSideProps({ params }) {

//   const res = await fetch(`http://bloom-content.vercel.app/api/?theme=${params.slug}`)
//   const data = await res.json()

//   return { props: { data }}
// }