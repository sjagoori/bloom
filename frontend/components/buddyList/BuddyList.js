import BuddyCard from '@/components/buddyCard/BuddyCard';
import styles from './BuddyList.module.css';

export default function BuddyList({ data }) {
  const users = data.map((key, index) => {
    console.log(key.user_id);
    return <BuddyCard key={index} user_id={key.user_id} name={key.name} kankerType={key.kankerType} birthDate={getAge(key.birthDate)} />
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