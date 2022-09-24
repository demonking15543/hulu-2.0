import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HulU 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hulu 2.0</h1>
      {/* header */}
      <Header/>
      {/* Navbar */}
      {/* main */}



      
    </div>
  )
}
