import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>HulU 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>
      {/* Navbar */}
      <Nav/>
      {/* Result */}
      <Result/>



      
    </div>
  )
}

export async function getServerSideProps(context){
  const gener = context.query.gener;
  const request = await fetch(`https://www.themoviedb.org/3${
    requests[gener]?.url || requests.fetchTrending.url }`
    ).then(res => res)

  return {
    props:{
      results:request.results
    }
  }
}