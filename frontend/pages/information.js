import { useRouter } from 'next/router';
import Header from "../components/header/Header";
import styles from "../styles/information.module.css";

export default function Blog() {
  const router = useRouter()

  return (
    <>
    <Header name="Thema's"/>
    <button type="button" onClick={() => router.back()}>    <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg></button>

    <ul>
      <li className={styles.accordion}>Hoe werkt bloom? <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg></li>
      <li className={styles.accordion}>Hoe is bloom ontstaan?</li>
      <li className={styles.accordion}>Hulpaanbieders</li>
      <li className={styles.accordion}>Veelgestelde vragen</li>
      <li className={styles.accordion}>Gegevensbeleid</li>
      <li className={styles.accordion}>Gebruikersvoorwaarden</li>
      <li className={styles.accordion}>Een probleem rapporteren</li>
    </ul>
    </>
  );
}
