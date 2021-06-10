import BuddyList from '@/components/buddyList/BuddyList';
import { useState } from 'react';
import styles from '../styles/Buddies.module.css';

const filter = {
  All: () => true,
  SameType: (users, user) => {users.filter(users => users.kankerType[0] == user.kankerType[0] )}
}

export default function Buddies(props) {
  console.log(props.singleUser)
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
    <BuddyList data={props.data}/>
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

// Data filteren wanneer deze binnenkomt vanuit de serverside
//ipv serversideprops is het een normale fetch functie die dat ophaalt enn dan in de props gooit

export async function getServerSideProps({params}) { 
  const res = await fetch(`http://localhost:3001/getAllUsers`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
    }
  }
}