import { useRouter } from 'next/router';
import styles from "./[slug].module.css";


const Blogs = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
    {/* How to make the image dynamic from a dynamic route that is passed through Link? */}
<div className={styles.container}>
  <div className="head">
    <button type="button" onClick={() => router.back()}>back</button>
    <h1>bloom</h1>
  </div>
  <img className={styles.headerImage} src="https://images.unsplash.com/photo-1574243091999-8840e2931fe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" alt="vermoeid"/>
  <div className={styles.headerContainer}>
    <h1>{slug}</h1>
    <span className={styles.voiceOver}>
      <span>icon</span>
    lees voor
    </span>
  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa unde vitae quibusdam repudiandae laborum minima explicabo similique at! Voluptate distinctio, id esse neque delectus sequi. Quod fuga est itaque quidem?</p>
</div>
    </>
  )
}

export default Blogs