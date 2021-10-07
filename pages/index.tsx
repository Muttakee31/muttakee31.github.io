import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {Grid} from "@mui/material";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Grid container style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Grid item md={6} className={styles.description}>
                  I am Saad Al Muttakee. Web developer, football freak, love to sleep, watched too many sitcoms.
                  I am currently working at Enosis Solutions.
                  I also have experience of working with React, Django, NodeJS.
                  Interested in blockchain, system design and backend architecture.
                  <br />
              </Grid>
              <Grid item md={6} style={{display: 'flex', justifyContent: 'center'}}>
                  <Image src="/dp.jpg" alt="Me" height={200} width={200} className={styles.image} />
              </Grid>
          </Grid>

      <div style={{textAlign: 'center'}}>
          You can find me here --
          <br />
          <a href="https://www.github.com/muttakee11/" style={{padding: 8}} target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="GitHub"/>
          </a>
          <a href="mailto:muttakee9@gmail.com" target="_blank" rel="noreferrer" style={{padding: 8}}>
              <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail"/>
          </a>
          <a href="https://www.linkedin.com/in/saad-al-muttakee-5aa399158/" style={{padding: 8}}>
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/>
          </a>
          <a href="https://www.facebook.com/muttakee9/" target="_blank" style={{padding: 8}} rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"/>
          </a>
          <a href="https://www.twitter.com/muttakee31/" target="_blank" style={{padding: 8}} rel="noreferrer">
              <img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt="Twitter"/>
          </a>
      </div>
      </main>
        <h4>
            Fun fact
        </h4>
        <p>
            &#128512; Series I am watching: Parks and recreation <br />
            &#127918; Recently played: TitanFall 2, GTA V <br />
            &#128517; Number of times deleting production database: 1 <br />
            &#128531; Compliment that heard the most: you look like you are in 7th/8th grade. <br/>
            &#128214; Recently read: Adarsha Hindu Hotel
        </p>
    </div>
  )
}

export default Home
