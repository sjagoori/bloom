import BuddyList from '@/components/buddyList/BuddyList';
import styles from '@/styles/Buddies.module.css';
import { useState } from 'react';

const filter = {
  All: () => true,
  SameType: (users, user) => {users.filter(users => users.kankerType[0] == user.kankerType[0] )}
}

export default function Buddies(props) {
  console.log(props)
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
    <BuddyList data={props.data.data}/>
    </>
  )
}

export async function getServerSideProps({params}) { 
  const res = await fetch(`https://bloom.bloomingbooty.repl.co/getAllUsers`)
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