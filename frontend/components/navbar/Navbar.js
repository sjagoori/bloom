import styles from "../../styles/Navigation.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar(props) {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname.replace('/', ''));

  console.log('path: \t', active)

  function handleClick(path) {
    setActive(path)
  }

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link
              onClick={() => handleClick(router.pathname.replace('/', ''))}
              href="/blog"
              id='blog'
              className={styles.navItem}
            >
              <div><img src={`/icons/thema-navigatie${active == 'blog' ? '-selected' : ''}.svg`} alt="" />
                <span>Blog</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick(router.pathname.replace('/', ''))}
              href="/buddies"
              id='buddies'
              className={styles.navItem}
            >
              <div><img src={`/icons/buddy-navigatie${active == 'buddies' ? '-selected' : ''}.svg`} alt="" />
                <span>Buddies</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick(router.pathname.replace('/', ''))}
              href="/chat"
              id='chat'
              className={styles.navItem}
            >
              <div><img src={`/icons/berichten-navigatie${active == 'chat' ? '-selected' : ''}.svg`} alt="" />
                <span>Chat</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleClick(router.pathname.replace('/', ''))}
              href="/profile"
              id='profile'
              className={styles.navItem}
            >
              <div><img src={`/icons/profiel-navigatie${active == 'profile' ? '-selected' : ''}.svg`} alt="" />
                <span>Profile</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}