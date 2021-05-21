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
      <img className={styles.headerImage} src="/images/thema-somberheid.jpg" alt="somberheid"/>
      <div className={styles.headerContainer}>
        <h1>{title}</h1>
          <span className={styles.voiceOver}>
          <img src="/icons/speaker-icoon.svg" alt="Back" className={`${styles.svgIcon}`}/>
        </span>
      </div>
      {/* dynamic */}
      <p>Een ernstige ziekte kan je somber maken. Dat is heel begrijpelijk. Je dagelijks leven en je toekomstplannen zijn ingrijpend veranderd. Ben je vaak somber en gaat dat gevoel niet over? Dan is het belangrijk dat je hulp zoekt.</p>


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
          <li>Je hebt nergens zin in. Veel dingen interesseren je niet meer.</li>
          <li>Je hebt geen zin om met vrienden af te spreken.</li>
          <li>Je hebt ook geen zin om te sporten of te werken.</li>
          <li>Je kunt je nergens op verheugen.</li>
          <li>Je piekert veel en je slaapt niet goed.</li>
          <li>Niemand kan je opvrolijken. Ook je vrienden of partner niet.</li>
          </ul>
          <blockquote>“Ik zeg tegen mijn vrienden dat het goed met me gaat. Maar ik voel me vaak eenzaam en somber.”</blockquote> 
        </div>
        <div className={toggleState ===2 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
          <h2>Tips om je minder somber te voelen</h2>
          <ul>
            <li>Praat met iemand over je sombere gevoelens. </li>
            <li>Denk niet steeds aan de toekomst. Probeer vooral in het hier en nu te leven.</li>
            <li>Zeg hardop ‘stop’ tegen jezelf als je merkt dat je piekert.</li>
            <li>Zorg voor voldoende slaap.</li>
            <li>Doe dingen die je leuk vindt en waar je van ontspant.</li>
            <li> Doe oefeningen om te ontspannen en rustig te ademen. Bijvoorbeeld door yoga of mindfulness te doen.</li>
            <li>Breng structuur aan in je dag. Probeer op vaste tijden op te staan en te gaan slapen. Eet gezond en op dezelfde tijden.</li>
            <li>Onderneem iets. Plan bijvoorbeeld een uitje. Dan heb je iets om naar uit te kijken. Je hebt er waarschijnlijk geen zin in. Maar je bent wel even afgeleid van je sombere gedachten.</li>
          </ul>
        </div>

        <div className={toggleState ===3 ? `${styles.tabContent} ${styles.active}` : styles.tabContent}>
          <h2>Hulp bij langdurige vermoeidheid</h2>
          <p>Al weken lang somber? Ga dan naar je huisarts. Je huisarts kan bijvoorbeeld medicijnen voorschrijven. Die helpen om rustiger te worden.
          De huisarts kan je ook doorverwijzen naar een gespreksgroep. In een gespreksgroep praat je met mensen die hetzelfde voelen als jij. Je huisarts kan je tips geven over verschillende trainingen en activiteiten. Die helpen je om minder te piekeren.
          Vind je praten lastig? Of uit je je gevoelens liever op een andere manier? Bijvoorbeeld door te schilderen, of aan muziek of beweging te doen. Dan kun je terecht bij een vaktherapeut.</p>
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