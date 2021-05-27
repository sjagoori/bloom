import { useRouter } from 'next/router';
import styles from '../styles/information.module.css';

const frequentlyAsked = [
  {
    question: 'Hoe werkt Bloom?',
    answer: 'Bloom werkt op een mobiele apparaat met internet.'
  },
  {
    question: 'Hoe is Bloom ontstaan?',
    answer: 'Bloom werkt op een mobiele apparaat met internet.'
  },
  {
    question: 'Hulpaanbieders',
    answer: 'Bloom werkt op een mobiele apparaat met internet.'
  },
  {
    question: 'Veelgestelde vragen',
    answer: 'Bloom werkt op een mobiele apparaat met internet.'
  },
  {
    question: 'Gegevensbeleid',
    answer: 'Bloom werkt op een mobiele apparaat met internet.'
  },
  {
    question: 'Gebruikersvoorwaarden',
    answer: 'Je mag het gebruiken als je geen mensen pest.'
  },
  {
    question: 'Een probleem rapporteren',
    answer: 'but Why'
  }
]

// const details = (data) => {
//   return <details>
//     <summary>hehehe</summary>
//     {data.map((element, key) => {
//       console.log(element);
//       <p key={key}>{element.question}</p>
//     })}
//   </details>
// }

export default function Information() {
  const router = useRouter()

  return (
    <>
      <div className={styles.topBar}>
        <button type="button" onClick={() => router.back()}>
          <img src="/icons/chevron-icoon.svg" alt=">" />
        </button>
        <h1>bloom</h1>
      </div>
    {Object.keys(frequentlyAsked).map((element, key) => {
      return <details className={styles.information} key={key}>
        <summary>{frequentlyAsked[element].question}</summary>
        <p>{frequentlyAsked[element].answer}</p>
      </details>
    })}
    </>
  );
}
