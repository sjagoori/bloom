import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from "../components/header/Header";
import styles from '../styles/blog.module.css';

const result = [
  {name: 'Vermoeidheid', url:'tired'},
  {name: 'Angst', url:'fear'},
  {name: 'Somberheid', url:'gloom'},
  {name: 'Mijn relatie', url:'relationship'},
  {name: 'Geldzaken & werk', url:'money'},
  {name: 'Lichaam& uiterlijk', url:'physical'}
];

const successState = <container>
{/* <div className={styles.tileContainer}>
{Object.keys(result).map((index, key) => {
    return <Link key={key} href={{pathname: '/blogs/[slug]', query: {slug: result[index].url, title: result[index].name} }}>
        <div className={styles.tile}>
          <h3>{result[index].name}</h3>
        </div>
      </Link>
    })}
</div> */}
<div className={styles.tileContainer}>
{Object.keys(result).map((index, key) => {
    return <Link key={key} href={{pathname: `/blogs/${result[index].url}`, query: {slug: result[index].url, title: result[index].name} }}>
        <div className={styles.tile}>
          <h3>{result[index].name}</h3>
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
    <div className={styles.container}>
    <p>HOE GA IK OM MET...</p>
      {content?successState:loadingState}
    </div>
    </>
  );
}