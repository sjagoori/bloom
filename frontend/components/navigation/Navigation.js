import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navigation.module.css';

export default function Navigation() {
  // const [currentNav, setCurrentNav] = useState('blog')
  const router = useRouter()
  // const path = router.pathname

  return  (
    <>
      <nav className={styles.navigation}>
      <ul>
          <li id='blog' className={styles.navItem} >
            <Link href="/blog">
              <div>
                <img src='/icons/thema-navigatie.svg' alt=""/>
                <span>Thema's</span>
              </div>
            </Link>
          </li>
          <li id='blog' className={styles.navItem} ><Link href="/buddy"><div><img src='/icons/buddy-navigatie.svg' alt=""/><span>Buddy</span></div></Link></li>
          <li id='blog' className={styles.navItem} ><Link href="/berichten"><div><img src='/icons/berichten-navigatie.svg' alt=""/><span>Berichten</span></div></Link></li>
          <li id='blog' className={styles.navItem} ><Link href="/profiel"><div><img  src='/icons/profiel-navigatie.svg' alt=""/><span>Profiel</span></div></Link></li>
        </ul>
        {/* 
        <ul>
          <li className={(path == '/blog') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><Link href="/blog"><div><img src={(path == '/blog') ? '/icons/thema-navigatie-selected.svg' : '/icons/thema-navigatie.svg'} alt=""/><span>Thema's</span></div></Link></li>
          <li className={(path == '/buddy') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><Link href="/buddy"><div><img src={(path == '/buddy') ? '/icons/buddy-navigatie-selected.svg' : '/icons/buddy-navigatie.svg'} alt=""/><span>Buddy</span></div></Link></li>
          <li className={(path == '/berichten') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><Link href="/berichten"><div><img src={(path == '/berichten') ? '/icons/berichten-navigatie-selected.svg' : '/icons/berichten-navigatie.svg'} alt=""/><span>Berichten's</span></div></Link></li>
          <li className={(path == '/profiel') ? `${styles.navItem} ${styles.active}` : `${styles.navItem}`}><Link href="/profiel"><div><img src={(path == '/profiel') ? '/icons/profiel-navigatie-selected.svg' : '/icons/profiel-navigatie.svg'} alt=""/><span>Profiel</span></div></Link></li>
        </ul>
         */}
      </nav>
    </>
  )
}