import { useRouter } from 'next/router';
import styles from '../styles/information.module.css';


export default function Information({data}) {
  const router = useRouter()

const detail = <article>
  {data.faq.map((key, index) => {
    return(
      <details key={index} className={styles.information}>
        <summary>{key.question}</summary>
        <p>{key.answer}</p>
      </details>
    )
  })}
</article>

  return (
    <>
      <article className={styles.accordion}>
      <nav className={styles.topBar}>        
        <button type="button" onClick={() => router.back()}>
          <img src="/icons/chevron-icoon.svg" alt=">" />
        </button>
        <h1>informatie</h1>
      </nav>
    {detail}
      </article>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/faq`)
  const data = await res.json()

  return { props: {data}}
}