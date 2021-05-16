import { useRouter } from 'next/router';
import styles from "./[slug].module.css";


const Blogs = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
    {/* How to make the image dynamic from a dynamic route that is passed through Link? */}
      <div className={styles.container}>
        <div className={styles.titleBar}>
        <button type="button" onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1>bloom</h1>
        </div>
      <img className={styles.headerImage} src="https://images.unsplash.com/photo-1574243091999-8840e2931fe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" alt="vermoeid"/>
      <div className={styles.headerContainer}>
        <h1>{slug}</h1>
          <span className={styles.voiceOver}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      <p>De behandeling van kanker kost veel energie. Dat is logisch. Je lichaam heeft tijd nodig om te herstellen. Daarnaast moet je alle emoties en gebeurtenissen verwerken. Ook dat kost energie.</p>
      </div>
    </>
  )
}

export default Blogs