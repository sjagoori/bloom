import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(props) {

  return (
    <>
      <nav className={styles.container}>
        <h1>{props.name}</h1>
        {props.children}
        {props.isBlogs
          ?
          <>
            <Link href="/information">
              <img src="/icons/informatie-icoon.svg" alt="information symbol" className={`${styles.icon}`} />
            </Link>
            <img src="/icons/zoek-icoon.svg" alt="" className={`${styles.icon} ${styles.search}`} />
          </>
          : <></>}
      </nav>
    </>
  )
}