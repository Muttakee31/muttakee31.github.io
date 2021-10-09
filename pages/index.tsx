import type {NextPage} from 'next'
import {Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";

const classes = {
    container: `container`,
    main: 'main',
    cardContainer: `cardContainer`,
    grid: 'grid',
    description: 'description',
    dp: 'dp',
    imageContainer: 'imageContainer',
    image: 'image',

}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.container}`]: {
        minHeight: '100vh',
        padding: '0 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    [`& .${classes.main}`]: {
        padding: '5rem 1rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    [`& .${classes.grid}`]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    [`& .${classes.description}`]: {
        textAlign: 'center'
    },
    [`& .${classes.dp}`]: {
        borderRadius: '50%',
        padding: '8px'
    },
    [`& .${classes.imageContainer}`]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    [`& .${classes.image}`]: {
        padding: 8
    }
}));

const Home: NextPage = () => {
  return (
    <Root className={classes.container}>
      <Container className={classes.main}>
          <Grid container className={classes.grid}>
              <Grid item md={6} className={classes.description}>
                  From Dhaka, Bangladesh. I Love building stuffs from scratch. Doing this since final year of graduation.
                  Have an irreparable sleep cycle because of European football.
                  I also watch a lot of sitcoms.
                  <br />
              </Grid>
              <Grid item md={6} className={classes.imageContainer}>
                  <img src="./dp.jpg" alt="Me" height={200} width={200} className={classes.dp} />
              </Grid>
          </Grid>

      <div style={{textAlign: 'center'}}>
          You can find me here --
          <br />
          <br />
          <a href="https://www.github.com/muttakee11/" className={classes.image} target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="GitHub"/>
          </a>
          <a href="mailto:muttakee9@gmail.com" target="_blank" rel="noreferrer" className={classes.image}>
              <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail"/>
          </a>
          <a href="https://www.linkedin.com/in/saad-al-muttakee-5aa399158/" className={classes.image}>
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/>
          </a>
          <a href="https://www.facebook.com/muttakee9/" target="_blank" className={classes.image} rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"/>
          </a>
          <a href="https://www.twitter.com/muttakee31/" target="_blank" className={classes.image} rel="noreferrer">
              <img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt="Twitter"/>
          </a>
      </div>
      <h4>
          Fun fact
      </h4>
      <p>
          &#127916; Series I am currently watching: Parks and recreation <br />
          &#127918; Recently played: TitanFall 2, GTA V <br />
          {/*&#128517; Number of times deleting production database: 1 <br />*/}
          &#128531; Compliment that heard the most: you look like you are in 7th/8th grade. <br/>
          &#128214; Recently read: Adarsha Hindu Hotel
      </p>
      </Container>
    </Root>
  )
}

export default Home
