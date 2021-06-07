import BuddyList from '@/components/buddyList/BuddyList';
import styles from '../styles/Buddy.module.css';


export default function Buddy() {
  
  return (
    <>
    <header className={styles.topBar}>
    <h1>Buddy zoeken</h1>
    <button><img src="./icons/filter-icoon.svg" alt="Filter" /></button>
    </header>
    <BuddyList />
    </>
  )
}
