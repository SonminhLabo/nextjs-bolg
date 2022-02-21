
import  { useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import mvPic from '../public/images/mv_slide_01.jpg';
import useConstructor from '../custom-hooks/useConstructor';
const Home : React.FC = () => {
  let firstName: string = "hellword";
  const [count, setCount] = useState(0);
  useEffect(() => {
      console.log('constructor run <=> render 01');
  })

  useConstructor(()=> {
     console.log('constructor run <=> render 02');
  })

  const handleClick = ()=>{
      setCount((prevCount) => {
         return prevCount + 1;
      })
  }
  return (
    <div className={styles.container}>
     
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="/css/global.css" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! Edit</a>
        </h1>
        <button onClick={handleClick}>Click Me</button>
        <p>{count}</p>
      </main>

    </div>
  )
} 
export default Home;