import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from "./[slug].module.css";

const contentData = [{'type': 'klachten', 'content': 'hakakakkaa'},{'type': 'tips', 'content': 'wakakaka'},{'type': 'hulp', 'content': 'helluuup'}]

const Blogs = () => {
  const router = useRouter()
  const { slug, title } = router.query

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const [content, setContent] = useState('vermoeidheid')

  const populateContent = (identifier) => {
    (slug === identifier) ? setContent('') : false
  } 



  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleBar}>
        <button type="button" onClick={() => router.back()}>
        <img src="/icons/chevron-icoon.svg" alt="Back" className={`${styles.svgIcon} ${styles.rotate}`}/>

        </button>
        <h1>Bloom</h1>
        </div>
        {/* Dynamic */}
        <img className={styles.headerImage} src="/images/thema-relatie.jpg" alt="relatie"/>
      <div className={styles.headerContainer}>
        <h1>{title}</h1>
          <span className={styles.voiceOver}>
          <img src="/icons/speaker-icoon.svg" alt="Back" className={`${styles.svgIcon}`}/>

        </span>
      </div>
      {/* dynamic */}
      <p>De behandeling van kanker kost veel energie. Dat is logisch. Je lichaam heeft tijd nodig om te herstellen. Daarnaast moet je alle emoties en gebeurtenissen verwerken. Ook dat kost energie.</p>


      <div className={styles.tabBar}>
        <label className={toggleState ===1 ? `${styles.tab} ${styles.activeTab}` : styles.tab} htmlFor="complaints">Klachten</label>
        <input type="radio" name="typeContent" id="complaints" onClick={() => toggleTab(1)} defaultChecked />
        <label className={toggleState ===2 ? `${styles.tab} ${styles.activeTab}` : styles.tab} htmlFor="tips">Tips</label>
        <input type="radio" name="typeContent" id="tips" onClick={() => toggleTab(2)} />
        <label className={toggleState ===3 ? `${styles.tab} ${styles.activeTab}` : styles.tab} htmlFor="help">Hulp</label>
        <input type="radio" name="typeContent" id="help" onClick={() => toggleTab(3)} />
      </div>
      
      <div className={styles.contentTab}>
        <div className={toggleState ===1 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
          {/* Dynamic */}
        <p>Meestal ben je na een paar maanden minder moe. Maar je kunt ook lang na de behandeling nog erg moe zijn. Ben je zes maanden na de behandeling nog steeds erg moe? En kan de arts daar geen lichamelijke oorzaak voor vinden? Dan heb je last van langdurige vermoeidheid.</p>
        {/* Dynamic */}
        <h2>Herken je deze klachten?</h2>
        {/* Dynamic */}
        <ul>
          <li>Je bent moe op momenten dat je dat vroeger niet was.</li>
          <li>Je bent plotseling moe, maar je weet niet waarom.</li>
          <li>De vermoeidheid voelt alsof je uitgeput bent.</li>
          <li>Je bent al erg moe na een eenvoudig klusje. </li>
          <li>Bijvoorbeeld afwassen of stofzuigen.</li>
          <li>Je bent elke dag moe. De vermoeidheid gaat niet over. Ook niet als je even gaat zitten en uitrust.</li>
        </ul>
        <blockquote>"Ik mezelf behoorlijk uitgeput. Dit zorgt voor vermoeidheid, zowel lichamelijk als mentaal."</blockquote>
        <h2>Andere klachten</h2>
        <p>Als je erg moe bent, heb je weinig energie en kun je weinig doen. Dat heeft invloed op je emoties en gevoelens. Je bent bijvoorbeeld snel boos of somber. Mensen begrijpen vaak niet hoe het is om steeds moe te zijn. Dat kan je eenzaam maken.</p>
        <p>Door vermoeidheid werken ook je hersenen minder goed. Soms kun je dan dingen niet goed onthouden. Of kun je je moeilijk concentreren.</p>
        </div>
        
        <div className={toggleState ===2 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
        <h2>Tips om je minder moe te voelen</h2>
        <ul>
          <li>Eet gezond en op vaste tijden. Sla geen maaltijden over.</li>
          <li>Zorg dat je voldoende beweegt, ook al ben je moe. Bijvoorbeeld door een stukje te wandelen of fietsen. Regelmatig bewegen is goed voor je conditie, ook voor je herstel en je humeur.</li>
          <li>Plan niet teveel dingen op een dag. Neem tussendoor regelmatig even rust.</li>
          <li>Verdeel de dingen die je wilt doen over de week.</li>
          <li>Ga op een vaste tijd naar bed. Probeer overdag zo min mogelijk te slapen of helemaal niet te slapen.</li>
        </ul>
        </div>

        <div className={toggleState ===3 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
        <h2>Hulp bij langdurige vermoeidheid</h2>
        <p>Blijf je na je behandeling maandenlang heel erg moe? Dan is het belangrijk dat je hulp zoekt.  Je huisarts, arts in het ziekenhuis of verpleegkundige kan je doorverwijzen naar een therapeut. Of naar een behandelcentrum voor langdurige vermoeidheid.</p>
        <h2>Hulpaanbieders bij jou in de buurt</h2>
        <p>Je kunt bij onderstaande hulpaanbieders terecht met langdurige vermoeidheidsklachten.</p>
        <ul>
          <li className="list-item">
            <a href="#">Haaglanden Medisch Centrum</a>
          </li>
          <li className="list-item">
            <a href="#">Haaglanden Medisch Centrum</a>
          </li>
          <li className="list-item">
            <a href="#">Haaglanden Medisch Centrum</a>
          </li>
          <li className="list-item">
            <a href="#">Haaglanden Medisch Centrum</a>
          </li>
        </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default Blogs