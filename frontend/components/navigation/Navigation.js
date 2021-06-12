// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from './Navigation.module.css';

// export default function Navigation() {
//   // const [currentNav, setCurrentNav] = useState('blog')
//   const router = useRouter()
//   // const path = router.pathname

//   return  (
//     <>
//       <nav className={styles.navigation}>
//       <ul>
//           <li id='blog' className={styles.navItem} >
//             <Link href="/blog">
//               <div>
//                 <img src='/icons/thema-navigatie.svg' alt=""/>
//                 <span>Thema's</span>
//               </div>
//             </Link>
//           </li>
//           <li id='blog' className={styles.navItem} ><Link href="/buddy"><div><img src='/icons/buddy-navigatie.svg' alt=""/><span>Buddy</span></div></Link></li>
//           <li id='blog' className={styles.navItem} ><Link href="/berichten"><div><img src='/icons/berichten-navigatie.svg' alt=""/><span>Berichten</span></div></Link></li>
//           <li id='blog' className={styles.navItem} ><Link href="/profiel"><div><img  src='/icons/profiel-navigatie.svg' alt=""/><span>Profiel</span></div></Link></li>
//         </ul>
//       </nav>
//     </>
//   )
// }

import Link from "next/link";
import { useRouter } from 'next/router';
// import Buddies from "./buddies"
import { useCookies } from 'react-cookie';
import styles from './Navigation.module.css';


export default function Navigation() {
  const router = useRouter()

  const [cookie, setCookie] = useCookies(["user"])
  // console.log()
  // console.log(window)
  // const profileId = cookie.user.data.user_id

  return (
    <>
      <nav className={styles.navigation}>
        <ul>
          <li  id='blog' className={styles.navItem} ><Link href="/blog"><div><img src='/icons/thema-navigatie.svg' alt=""/><span>Thema's</span></div></Link></li>
          <li  id='blog' className={styles.navItem} ><Link href="/buddies"><div><img src='/icons/buddy-navigatie.svg' alt=""/><span>Buddy</span></div></Link></li>
          <li  id='blog' className={styles.navItem} ><Link href="/chat"><div><img src='/icons/berichten-navigatie.svg' alt=""/><span>Berichten</span></div></Link></li>
          {/* <li  id='blog' className={styles.navItem} ><Link href={`/buddy/${cookie.user.data.user_id}`}><div><img  src='/icons/profiel-navigatie.svg' alt=""/><span>Profiel</span></div></Link></li> */}
        </ul>
      </nav>
    </>
  )
}