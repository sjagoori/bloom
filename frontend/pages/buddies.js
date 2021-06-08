import BuddyList from '@/components/buddyList/BuddyList';
import { useState } from 'react';
import styles from '../styles/Buddies.module.css';

const filter = {
  All: () => true,
  
}

export default function Buddies() {
  // Show or hide filters
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <header className={styles.topBar}>
    <h1>Buddy zoeken</h1>
    <button
      onClick={() => setModalVisible()}  
    ><img src="./icons/filter-icoon.svg" alt="Filter" /></button>
    </header>
    <BuddyList />
    {/* <main className={styles.filterContainer}>
      <section>
        <p className={styles.leadingText}>ik wil contact met...</p>
        <form action="" method="post">
          <input type="checkbox" name="sameTypeCancer" id="" />
          <label htmlFor="sameTypeCancer">Gebruikers met hetzelfde type kanker</label>
          <input type="checkbox" name="usersOfGender" id="" />
          <label htmlFor="usersOfGender">Gebruikers van een bepaald gender</label>
          <input type="checkbox" name="typeOfGender" id="" disabled/>
          <input type="checkbox" name="typeOfGender" id="" disabled/>
          <input type="checkbox" name="typeOfGender" id="" disabled/>
          
        </form>
      </section>  
    </main>  */}
    </>
  )
}
