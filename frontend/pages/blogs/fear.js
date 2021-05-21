import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from "./[slug].module.css";

const contentData = [{'type': 'klachten', 'content': 'hakakakkaa'},{'type': 'tips', 'content': 'wakakaka'},{'type':
'hulp', 'content': 'helluuup'}]

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
      <button type="button" onClick={()=> router.back()}>
      <img src="/icons/chevron-icoon.svg" alt="Back" className={`${styles.svgIcon} ${styles.rotate}`}/>
      </button>
      <h1>Bloom</h1>
    </div>
    {/* Dynamic */}
    <img className={styles.headerImage} src="/images/thema-angst.jpg" alt="angst" />
    <div className={styles.headerContainer}>
      <h1>{title}</h1>
      <span className={styles.voiceOver}>
      <img src="/icons/speaker-icoon.svg" alt="Back" className={`${styles.svgIcon}`}/>
      </span>
    </div>
    {/* dynamic */}
    <p>
      Een ernstige ziekte kan je angstig maken. Dat is begrijpelijk. Je leven en toekomstplannen zijn ingrijpend
      veranderd. Veel mensen met kanker zijn angstig. Dat is een normale reactie. Ben je vaak angstig en gaat dat gevoel
      niet over? Dan is het belangrijk dat je hulp zoekt.
    </p>


    <div className={styles.tabBar}>
      <label className={toggleState===1 ? `${styles.tab} ${styles.activeTab}` : styles.tab}
        htmlFor="complaints">Klachten</label>
      <input type="radio" name="typeContent" id="complaints" onClick={()=> toggleTab(1)} defaultChecked />
      <label className={toggleState===2 ? `${styles.tab} ${styles.activeTab}` : styles.tab} htmlFor="tips">Tips</label>
      <input type="radio" name="typeContent" id="tips" onClick={()=> toggleTab(2)} />
      <label className={toggleState===3 ? `${styles.tab} ${styles.activeTab}` : styles.tab} htmlFor="help">Hulp</label>
      <input type="radio" name="typeContent" id="help" onClick={()=> toggleTab(3)} />
    </div>

    <div className={styles.contentTab}>
      <div className={toggleState===1 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
        {/* Dynamic */}
        <p>Meestal ben je na een paar maanden minder moe. Maar je kunt ook lang na de behandeling nog erg moe zijn. Ben
          je zes maanden na de behandeling nog steeds erg moe? En kan de arts daar geen lichamelijke oorzaak voor
          vinden? Dan heb je last van langdurige vermoeidheid.</p>
        {/* Dynamic */}
        <h2>Herken je deze klachten?</h2>
        {/* Dynamic */}
        <ul>
          <li>Je kunt door de angst niet meer functioneren in het dagelijks leven.</li>
          <li>Je durft geen plannen te maken voor de toekomst.</li>
          <li>Je controleert je lichaam vaker dan nodig is.</li>
          <li>Je durft niet naar het ziekenhuis te gaan voor de controles. Of je gaat juist heel vaak naar de dokter.</li>
          <li>Je piekert veel en je slaapt slecht.</li>
          <li>Je kunt je niet goed concentreren.</li>
          <li>Je hebt last van hartkloppingen, je trilt en bent vaak duizelig.</li>
        </ul>
        <blockquote>“Tijdens het behandelingstraject zit je heel erg vast in je angsten. Nu komt dat er langzaam uit.” 
        </blockquote>
      </div>

      <div className={toggleState===2 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
        <h2>Tips om je minder angstig te voelen</h2>
        <ul>
        <li>Praat met iemand over je angst en je gevoelens.</li>
        <li>Doe dingen die je leuk vindt en waar je van ontspant.</li>
        <li>Zoek afleiding. Plan bijvoorbeeld een uitje. Dan heb je iets om naar uit te kijken.</li>
        <li>Doe oefeningen om te ontspannen en rustig te ademen. Bijvoorbeeld door yoga of mindfulness te doen.</li>
        </ul>
        <h2>Angst hoort bij kanker</h2>
        <p>Het is normaal dat je je soms angstig voelt als je kanker hebt. Dat wil niet zeggen dat je overdreven reageert. Of dat je niet goed met de ziekte omgaat. Ook na de behandeling kun je nog lang angstig zijn. Je bent bijvoorbeeld erg bang dat de kanker terugkomt. Dat is begrijpelijk en normaal. Die angst wordt na een tijdje meestal minder. Maar sommige mensen blijven erg angstig. Ook jaren na de behandeling.</p>
      </div>

      <div className={toggleState===3 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
        <h2>Hulp bij angst</h2>
        <p>Voel je je vaak angstig? Bespreek dat dan met je huisarts. Of in het ziekenhuis met de verpleegkundige of arts. Vaak lucht het op om over je angst te praten. En je kan tips krijgen om je angst te verminderen.
Je huisarts of arts kan je doorverwijzen naar een therapeut. Zo’n zorgverlener kan je helpen om beter met je angst om te gaan. Bijvoorbeeld door met je te praten. Of met een therapie.
Je kunt ook over je angst praten met lotgenoten. Die ontmoet je in een inloophuis of bij een patiëntenorganisatie.
Uit je je gevoelens liever op een andere manier, bijvoorbeeld in schilderen, dans of muziek? Dan kun je terecht bij een vaktherapeut.</p>
        <h2>Hulpaanbieders bij jou in de buurt</h2>
        <p>Je kunt bij onderstaande hulpaanbieders terecht met langdurige angstklachten.</p>
        <ul>
          <li className="list-item">
            <a href="#">Haaglanden Medisch Centrum </a>
          </li>
          <li className="list-item">
            <a href="#">Module Angst en paniek</a>
          </li>
          <li className="list-item">
            <a href="#">Stichting Kanker in Beeld</a>
          </li>
          <li className="list-item">
            <a href="#">Zelfhulptraining Minder angst na kanker</a>
          </li>
          <li className="list-item">
            <a href="#">Psychologenpraktijk M. Kalogridi</a>
          </li>
          <li className="list-item">
            <a href="#">Eerstelijnspsychologiepraktijk Vosmeer</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>
)
}

export default Blogs