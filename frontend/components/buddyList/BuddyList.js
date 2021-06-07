import BuddyCard from '@/components/buddyCard/BuddyCard';
import styles from './BuddyList.module.css';

// Needs to be removed, dummy data.
const userData = [
  {name: 'Hazar Car Cybertruck the third', kankerType: ['breinkanker','pain'], birthDate: '1995-06-05'},
  {name: 'nathan Bommezijn', kankerType: ['breinkanker','pain'], birthDate: '1995-06-05'},
  {name: 'Shabier', kankerType: ['prolife','pain'], birthDate: '1995-06-05'},
  {name: 'Allyssa Alimoestar', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {name: 'Justus sturkenboom', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {name: 'Robert Spier', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {name: 'Janno Kaprisitias', kankerType: ['testlife','pain'], birthDate: '1995-06-05'},
  {name: 'Joost Faber', kankerType: ['testing','pain'], birthDate: '1995-06-05'},
  {name: 'Allyssa', kankerType: ['testing','pain'], birthDate: '1995-06-05'}
]

// Needs to be modified to retrieve serverSideProps.
export default function BuddyList() {
  const users = userData.map((key, index) => {
    return <BuddyCard key={index} name={key.name} kankerType={key.kankerType} birthDate={getAge(key.birthDate)}/>
  })

  return (
    <>
      <main className={styles.buddyContainer}>
        <section className={styles.cardLayout}>
          {users}
        </section>
      </main>
    </>
  )
}

/**
 * @title Get age in year format
 * @description Gets date object from user and transform it in a numerical value
 * @param {Date} birthday 
 * @returns {Number} Age
 */
 function getAge(birthday) {
  const birthDate = new Date(birthday)
  const today = new Date()
  return today.getFullYear() - birthDate.getFullYear()
}