import type {NextPage} from 'next';
import {Container, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import ParticleAnimation from '../components/ParticleAnimation';

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
        alignItems: 'center',
        zIndex: 100 
    },
    [`& .${classes.description}`]: {
        textAlign: 'center',
        margin: 'auto'
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
    }
}));

const Home: NextPage = () => {
  return (
    <Root className={classes.container}>
        <ParticleAnimation />
        <Container className={classes.main}>
            <Grid container className={classes.grid}>
                <Grid item xl={6} md={12} className={classes.description}>
                    &#x1F4CD; Dhaka, Bangladesh. <br />
                    &#x1F4BC; Software Engineer <br />
                    &#x2615; Tea Enthusiast <br />
                    &#x1F4A4; Always Tired<br />
                    <br />
                </Grid>
                <Grid item xl={6} md={12} className={classes.imageContainer}>
                    <img src="./dp.jpg" alt="Me" height={200} width={200} className={classes.dp} />
                </Grid>
            </Grid>

        <div style={{textAlign: 'center', zIndex: 100}}>
            You can find me here -
            <br />
            <br />
            <a href="https://www.github.com/muttakee31/" target="_blank" rel="noreferrer">
                <img src="../logos/github.png" alt="GitHub" className={classes.image}/>
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

            <h4>
                Some fun facts
            </h4>
            <ul style={{textAlign: 'start', listStyleType: 'none'}}>
                <li>&#127916; now watching: Invincible, Severance, The Regime</li>
                <li>&#128218; books I read/am reading: Foundation series (on 4th, Foundation&apos;s Edge), লাল সন্ত্রাস, ইসরাইলের উত্থান পতন</li>
                <li>&#127918; Games played: Stray (I forgot when I played this)</li>
                <li>&#128531; Compliment that heard the most: you look like you are in 7th/8th grade</li>
            </ul>
            </div>
        </Container>
        <div className={classes.footer}>
        </div>
    </Root>
    )
}

export default Home;