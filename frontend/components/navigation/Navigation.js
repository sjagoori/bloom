import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navigation.module.css';

export default function Navigation() {

  const router = useRouter()
  const path = router.pathname

  return  (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li className={(path == '/blog') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><img src={(path == '/blog') ? '/icons/thema-navigatie-selected.svg' : '/icons/thema-navigatie.svg'} alt=""/><Link href="/blog"><span>Thema's</span></Link></li>
          <li className={(path == '/buddy') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><img src={(path == '/buddy') ? '/icons/buddy-navigatie-selected.svg' : '/icons/buddy-navigatie.svg'} alt=""/><Link href="/buddy"><span>Buddy</span></Link></li>
          <li className={(path == '/berichten') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><img src={(path == '/berichten') ? '/icons/berichten-navigatie-selected.svg' : '/icons/berichten-navigatie.svg'} alt=""/><Link href="/berichten"><span>Berichten</span></Link></li>
          <li className={(path == '/profiel') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><img src={(path == '/profiel') ? '/icons/profiel-navigatie-selected.svg' : '/icons/profiel-navigatie.svg'} alt=""/><Link href="/profiel"><span>Profiel</span></Link></li>
        </ul>
      </nav>
    </>
  )
}