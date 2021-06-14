import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import styles from "../../styles/Article.module.css";

export default function Article({ data }) {
  const router = useRouter();
  const { article } = router.query;

  console.log(data);

  const header = <header>
    <img className={styles.coverImage} src={`/images/thema-${article}.jpg`} />
    {Object.values(data.header).map((key, index) => {
      return typeof key.element != 'img' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <Image src={key.link}></Image>
    })}
  </header>

  const klachten = <section>
    {Object.values(data.klachten).map((key, index) => {
      return key.element != 'ul' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <ul>{key.content.map((element, i) => <li key={i}>{element}</li>)}</ul>
    })}
  </section>

  const tips = <section>
    {Object.values(data.tips).map((key, index) => {
      return key.element != 'ul' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <ul>{key.content.map((element, i) => <li key={i}>{element}</li>)}</ul>
    })}
  </section>

  const hulp = <section>
    {
      Object.values(data.hulp).map((key, index) => {
        return key.element != 'a'
          ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`)
          : key.content.map((element, i) => {
            // console.log(element)
            return (
              <a key={i} className={styles[`${key.class}`]} href={element.url}>
                <div>{element.label}</div>
                <span><img src="/icons/chevron-icoon.svg" alt=">" /></span>
              </a>

            )
          })
      })
    }
  </section>

  const [state, setState] = useState({ view: klachten, pos: 0 })

  function handleSwipe(e) {
    switch (e) {
      case 0:
        setState({ view: klachten, pos: 0 })
        break;
      case 1:
        setState({ view: tips, pos: 1 })
        break;
      case 2:
        setState({ view: hulp, pos: 2 })
        break;
    }
  }

  return (
    <>
      <main className={styles.container}>
        <nav className={styles.topBar}>
          <Link href="/blog">
            <img src="/icons/chevron-icoon.svg" alt=">" />
          </Link>
          <h1>bloom</h1>
        </nav>
        {header}
        <nav className={styles.tabBar}>
          <ul>
            <li class={state.pos == 0 ? `${styles.active}` : null} onClick={() => setState({ view: klachten, pos: 0 })}>klachten</li>
            <li class={state.pos == 1 ? `${styles.active}` : null} onClick={() => setState({ view: tips, pos: 1 })}>tips</li>
            <li class={state.pos == 2 ? `${styles.active}` : null} onClick={() => setState({ view: hulp, pos: 2 })}>hulp</li>
          </ul>
        </nav>
        <SwipeableViews index={state.pos} onChangeIndex={handleSwipe} className={styles.swipeContainer} >
          {klachten}
          {tips}
          {hulp}
        </SwipeableViews>
      </main>
    </>

  )
}


export async function getServerSideProps({ params }) {

  const res = await fetch(`https://bloom-content.vercel.app/api/?theme=${params.article}`)
  const data = await res.json()

  return { props: { data } }
}