import Link from 'next/link';
import React, { useState } from 'react';
import Header from "../components/header/Header";
import styles from '../styles/blog.module.css';

const result = [
  {name: 'Vermoeid', url: '/blog/[slug]'},
  {name: 'angst', url: '/blog/[slug]'},
  {name: 'somberheid', url: '/blog/[slug]'},
  {name: 'Mijn relatie', url: '/blog/[slug]'},
  {name: 'Geldzaken & werk', url: '/blog/[slug]'},
  {name: 'Lichaam & uiterlijk', url: '/blog/[slug]'}
];

const successState = <container>
<div className={styles.tileContainer}>
{Object.keys(result).map((index, key) => {
    return <Link key={key} href={{pathname: '/blogs/[slug]', query: {slug: result[index].name} }}>
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
    <Header name="Thema's"/>
    <p>HOE GA IK OM MET...</p>
      {content?successState:loadingState}
    </>
  );
}
