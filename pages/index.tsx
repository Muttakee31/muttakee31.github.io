import type {NextPage} from 'next';
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
    footer: 'footer'
}

const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.container}`]: {
        minHeight: '100vh',
        padding: '0 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh'
    },
    [`& .${classes.main}`]: {
        padding: '5rem 1rem 0 1rem',
        flex: 1,
        minHeight: 'calc(100vh - 80px)',
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
        margin: '8px',
        [theme.breakpoints.down('md')]: {
            margin: '20px'
        }
    },
    [`& .${classes.imageContainer}`]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    [`& .${classes.image}`]: {
        margin: 8,
        transition: 'transform 0.25s',
        [`&:hover`]: {
            transform: 'scale(1.15)'
        }
    },
    [`& .${classes.footer}`]: {
        textAlign: 'right',
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            right: 0,
            bottom: 0
        }
    }
}));

const Home: NextPage = () => {
  return (
    <Root className={classes.container}>
      <Container className={classes.main}>
          <Grid container className={classes.grid}>
              <Grid item md={6} className={classes.description}>
                  I am from Dhaka, Bangladesh. Computers always amazed me since I was a child.
                  Making the decision to pursue a degree in computer science was one of the easiest decision I ever took to be honest.
                  I love building new stuffs and learning new tech.
                  I have almost three years experience of working as full stack developer and specialize in geolocation and data visualization.
                  Now I am looking for a higher studies opportunity and hoping to be a part of the community who are always pushing the boundaries of knowledge.
                  <br />
              </Grid>
              <Grid item md={6} className={classes.imageContainer}>
                  <img src="./dp.jpg" alt="Me" height={200} width={200} className={classes.dp} />
              </Grid>
          </Grid>

      <div style={{textAlign: 'center'}}>
          You can find me here -
          <br />
          <br />
          <a href="https://www.github.com/muttakee31/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="GitHub" className={classes.image}/>
          </a>
          <a href="mailto:muttakee9@gmail.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" className={classes.image}/>
          </a>
          <a href="https://www.linkedin.com/in/saad-al-muttakee-5aa399158/">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin" className={classes.image}/>
          </a>
          <a href="https://www.facebook.com/muttakee9/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className={classes.image}/>
          </a>
          <a href="https://www.twitter.com/muttakee31/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/fluency/48/000000/twitter.png" alt="Twitter" className={classes.image}/>
          </a>
        </div>
        <h4>
          Some fun facts
        </h4>
        <p>
              &#127916; Series I am currently watching: Attack on Titan : Final Season <br />
              {/* &#127918; Recently played: TitanFall 2, GTA V <br /> */}
              &#128531; Compliment that heard the most: you look like you are in 7th/8th grade. <br/>
        </p>
      </Container>
      <div className={classes.footer}>
          <a href="http://barneysvideoresume.com/" target="_blank" rel="noreferrer" style={{fontSize: '0.7em'}}>
              unimpressed?click here to view an ideal resume &#128517;
          </a>
      </div>
    </Root>
  )
}

export default Home
