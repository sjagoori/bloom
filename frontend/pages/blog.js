import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from "../components/header/Header";
import styles from '../styles/blog.module.css';
import parseCookie from '../utils/parseCookie'

const blogs = [
  { name: 'Vermoeidheid', slug: 'vermoeidheid' },
  { name: 'Angst', slug: 'angst' },
  { name: 'Somberheid', slug: 'somberheid' },
  { name: 'Mijn relatie', slug: 'relatie' },
  { name: 'Geldzaken & werk', slug: 'geld' },
  { name: 'Lichaam & uiterlijk', slug: 'lichaam' }
];


export default function Blog({ redirect }) {
  const [content, setContent] = useState(true);

  const successState = <container>
    <div className={styles.tileContainer}>
      {Object.keys(blogs).map((index, key) => {
        return <Link key={key} href={{ pathname: `/blog/${blogs[index].slug}` }}>
          <div className={(key == 1 || key == 2 || key == 5) ? `${styles.tile} ${styles.backgroundImage}` : `${styles.tile}`}>
            <span className={styles.themeName}>{blogs[index].name}</span>
            <span className={styles.pointer}><img src="/icons/chevron-icoon.svg" alt="" /></span>
          </div>
        </Link>
      })}
    </div>
  </container>

  const loadingState = <container>
    <p>Loading...</p>
  </container>

  return (
    <>
      <Head>
        <title>Thema's</title>
      </Head>
      <Header name="Thema's" isBlogs={true} />
      <article className={styles.container}>
        <header>
          <p>HOE GA IK OM MET...</p>
        </header>
        {content ? successState : loadingState}
      </article>
    </>
  );
}


// Blog.getInitialProps = async (ctx) => {
//   const another = await ctx.req.headers.cookie;

//   if (typeof another === 'undefined') {
//     // On server
//     if (typeof window === 'undefined') {
//       ctx.res.writeHead(302, { location: '/' })
//       ctx.res.end()
//     } else {
//       // On client
//       Router.push('/')
//     }
//   }

//   return {}

  // if (another == null) {
  //   return { redirect: '/' };
  // }

  // if (another != null) {
  //   const cookie = parseCookie(another)
  //   if (JSON.parse(cookie.user) == '') {
  //     return { redirect: '/' };
  //   }
  // }

  // return { redirect: false };
// };