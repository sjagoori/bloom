import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styles from "./[slug].module.css";

export default function Blog({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const header = <header>
    <img className={styles.coverImage} src={`/images/thema-${slug}.jpg`} />
    {Object.values(data.header).map((key, index) => {
      console.log(styles);
      return typeof key.element != 'img' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <Image src={key.link}></Image>
    })}
  </header>

  const klachten = <main>
    {Object.values(data.klachten).map((key, index) => {
      return key.element != 'ul' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <ul>{key.content.map((element, i) => <li key={i}>{element}</li>)}</ul>
    })}
  </main>

  const tips = <main>
    {Object.values(data.tips).map((key, index) => {
      return key.element != 'ul' ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) : <ul>{key.content.map((element, i) => <li key={i}>{element}</li>)}</ul>
    })}
  </main>

  const hulp = <main>
    {Object.values(data.hulp).map((key, index) => {
      return key.element != 'a' 
      ? React.createElement(`${key.element}`, { key: index, className: `${styles[`${key.class}`]}` }, `${key.content}`) 
      : key.content.map((element, i) => {
        console.log(element)
        return (
          <a key={i} className={styles[`${key.class}`]} href={element.url}>
            <div>{element.label}</div>
            <span><img src="/icons/chevron-icoon.svg" alt=">" /></span>
            </a>
          
        )
      })
    })}
  </main>

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
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/blog">
          <img src="/icons/chevron-icoon.svg" alt=">" />
        </Link>
        <h1>bloom</h1>
      </div>
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
      </div>
    </>

  )
}


export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3001/blog/${params.slug}`)
  const data = await res.json()

  return { props: {data}}
}