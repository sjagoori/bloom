import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from "./[slug].module.css";


export default function Blog({data}){
  const router = useRouter();
  const {slug, title} = router.query;
  
  const header = <header>
    <img className={styles.coverImage} src={`/images/thema-${slug}.jpg`}/>
    {Object.values(data.header).map((key, index)=>{
      return typeof key.element != 'img' ? React.createElement(`${key.element}`, {key: index}, `${key.content}`) : <Image src={key.link}></Image>
    })}
  </header>

  const klachten = <main>
    {Object.values(data.klachten).map((key, index)=>{
      console.log(key)
      return key.element != 'ul' ? React.createElement(`${key.element}`, {key: index, className:`${key.class}`}, `${key.content}`) : <ul>{key.content.map((element,i ) => <li key={i}>{element}</li>)}</ul>
    })}
  </main>

const tips = <main>
    {Object.values(data.tips).map((key, index)=>{
      console.log(key)
      return key.element != 'ul' ? React.createElement(`${key.element}`, {key: index, className:`${key.class}`}, `${key.content}`) : <ul>{key.content.map((element,i ) => <li key={i}>{element}</li>)}</ul>
    })}
  </main>

const hulp = <main>
    {Object.values(data.hulp).map((key, index)=>{
      console.log(key)
      return key.element != 'ul' ? React.createElement(`${key.element}`, {key: index, className:`${key.class}`}, `${key.content}`) : <ul>{key.content.map((element,i ) => <li key={i}>{element}</li>)}</ul>
    })}
  </main>
  
  const [state, setState] = useState(klachten)



  return (
    <>
      {header}
      <nav>
        hieruit kiezen
        <ul>
          <li onClick={() => setState(klachten)}>klachten</li>
          <li onClick={() => setState(tips)}>tips</li>
          <li onClick={() => setState(hulp)}>hulp</li>
        </ul>
      </nav>
      {state}
    </>

  )
}


export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3001/blog/${params.slug}`)
  const data = await res.json()
  return { props:  {data}  }
}
