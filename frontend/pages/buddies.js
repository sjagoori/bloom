import BuddyList from '@/components/buddyList/BuddyList';
import { useState } from 'react';
import styles from '../styles/Buddies.module.css';

const filter = {
  All: () => true,
  
}

const userData = [
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Hazar Car Cybertruck the third', kankerType: ['breinkanker','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'nathan Bommezijn', kankerType: ['breinkanker','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Shabier', kankerType: ['prolife','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Allyssa Alimoestar', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Justus sturkenboom', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Robert Spier', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Janno Kaprisitias', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Joost Faber', kankerType: ['testing','pain'], birthDate: '1995-06-05'},
  {_id: '60b8e9c2aea08a5f61999c19' ,name: 'Allyssa', kankerType: ['testing','pain'], birthDate: '1995-06-05'}
]

export default function Buddies({data}) {
  // data = userData
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
    <BuddyList data={data = userData}/>
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
