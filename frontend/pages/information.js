import { useRouter } from 'next/router';
import styles from '../styles/information.module.css';

export default function Information() {
  const router = useRouter()

  const detail = <article>
    {data.faq.map((key, index) => {
      return (
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

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/faq`)
//   const data = await res.json()

//   return { props: { data } }
// }

const data = {
  faq: [
    {
      "question": "Hoe werkt Bloom?",
      "answer": "Bloom werkt op een mobiele apparaat met internet."
    },
    {
      "question": "Hoe is Bloom ontstaan?",
      "answer": "Een afstudeerproject van Eva valkenburg"
    },
    {
      "question": "Hulpaanbieders",
      "answer": "In de Bloom app worden hulpaanbieders opgenomen die aanvullende behandeling en begeleiding bieden aan kankerpatiënten in remissie. De verwijzing vindt je terug op de thema pagina's onder hulp. Vermelding in de Bloom app? Lees voor het doen van een verzoek eerst onze criteria door."
    },
    {
      "question": "Veelgestelde vragen",
      "answer": "Bedenk eens een vraag"
    },
    {
      "question": "Gegevensbeleid",
      "answer": "Volgens AVG wetten."
    },
    {
      "question": "Gebruikersvoorwaarden",
      "answer": "Je mag het gebruiken als je geen mensen pest."
    },
    {
      "question": "Een probleem rapporteren",
      "answer": "but Why"
    }
  ]
}