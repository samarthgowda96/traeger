import Head from 'next/head'
import styles from '../src/styles/Home.module.css'
import {mockComponents} from '../src/sample/components';
import Products from './Products'
import { Button } from '@material-ui/core';
import {useState} from 'react'


export async function getServerSideProps() {
  return { props: { components: mockComponents } }
}

export default function Home({components}) {
  //Declaring a state to user to select the type of Grill
  const [grillName,setGrillName]=useState('')
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
        <h3 style={{color:"white"}}>TRAEGER GRILLS</h3>
          {/* Sending the grill type as a string */}
          <Button onClick={(e)=>setGrillName("Ironwood 650 Pellet Grill")}><h1 className={styles.btn}>Ironwood</h1></Button>
          <Button  onClick={(e)=>setGrillName("Timberline Features - Tout Content")}><h1 className={styles.btn}>Timberline</h1></Button>
          <Products products={components} grillName={grillName}/>
        </h1>
        
      </main>
    </div>
  )
}