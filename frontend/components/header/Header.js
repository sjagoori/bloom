import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <>
    <div className={styles.container}>
      <h1>{props.name}</h1>
      <Link href="/information">
        <img src="/icons/informatie-icoon.svg" alt="information symbol" className={`${styles.icon}`} />
      </Link>
    </div>
    </>
  )
}

