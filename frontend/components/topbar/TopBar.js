import styles from "./TopBar.module.css";
import { useRouter } from 'next/router'

export default function TopBar() {
  const router = useRouter()

  return (
    <>
      <nav className={styles.topBar}>
        <a onClick={() => router.back()}>
          <img src="/icons/chevron-icoon.svg" alt="<" />
        </a>
      </nav>
    </>
  )
}

