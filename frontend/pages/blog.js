import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from "../components/header/Header";
import styles from '../styles/blog.module.css';

const result = [
  {name: 'Vermoeidheid', slug:'vermoeidheid'},
  {name: 'Angst', slug:'angst'},
  {name: 'Somberheid', slug:'somberheid'},
  {name: 'Mijn relatie', slug:'relatie'},
  {name: 'Geldzaken & werk', slug:'geld'},
  {name: 'Lichaam & uiterlijk', slug:'lichaam'}
];



const successState = <container>
<div className={styles.tileContainer}>
{Object.keys(result).map((index, key) => {
    return <Link key={key} href={{pathname: `/blogs/${result[index].slug}` }}>
        <div className={(key == 1 || key == 2 || key == 5) ? `${styles.tile} ${styles.backgroundImage}` : `${styles.tile}`}>
          <span className={styles.themeName}>{result[index].name}</span>
          <span className={styles.pointer}><img src="/icons/chevron-icoon.svg" alt="" /></span>
        </div>
      </Link>
    })}
</div>
</container>

const loadingState = <container>
  <p>you suck</p>
</container>

export default function Blog() {
 
  const [content, setContent] = useState(true);

  return (
    <>
    <Head>
      <title>Thema's</title>
    </Head>
    <Header name="Thema's"/>
    <article className={styles.container}>
    <header>
    <p>HOE GA IK OM MET...</p>
    </header>
      {content?successState:loadingState}
    </article>
    </>
  );
}
