import {NextPage} from "next";
import {projects} from "../utils/projects";
import {Card, CardContent, Chip, Grid, Grow} from "@mui/material";
import {styled} from "@mui/material/styles";

const classes = {
    main: 'main',
    container: `container`,
    cardContainer: `cardContainer`,
    card: 'card',
    cardContent: 'cardContent',
    btnStyle: 'btnStyle',
    center: 'center'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.main}`]: {
        width: '80vw',
        marginX: '10vw'
    },
    [`& .${classes.container}`]: {
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${classes.cardContainer}`]: {
        display: 'flex',
        justifyContent: 'center'
    },
    [`& .${classes.card}`]: {
        margin: '24px 16px',
        width: '100%',
        padding: '2px',
        alignContent: 'stretch',
        alignSelf: 'stretch',
        position: 'relative',
        background: 'linear-gradient(135deg, #8635b9, #1175bd, #15c5e1)',
        backgroundSize: '200% 200%',
        borderRadius: '4px',
        boxShadow: theme.palette.mode === 'light' ? '0 30px 40px -20px #a3a5ae' : '0 30px 40px -20px #0e1e68',
        animation: 'gradientMove 3s ease infinite',
        '&.MuiCard-root': {
            background: 'linear-gradient(135deg, #8635b9, #1175bd, #15c5e1)',
            backgroundSize: '200% 200%',
            boxShadow: 'none',
        },
        '& .MuiCardContent-root': {
            backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : theme.palette.background.paper,
            borderRadius: '2px',
            padding: '16px',
            height: '100%',
            '&:last-child': {
                paddingBottom: '16px',
            }
        },
        [`&:hover`]: {
            transform: 'translateY(-5px)'
        }
    },
    '@keyframes gradientMove': {
        '0%': {
            backgroundPosition: '0% 50%',
        },
        '50%': {
            backgroundPosition: '100% 50%',
        },
        '100%': {
            backgroundPosition: '0% 50%',
        },
    },
    [`& .${classes.cardContent}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    },
    [`& .${classes.center}`]: {
        display: 'flex',
        justifyContent:'center'
    },
    [`& .${classes.btnStyle}`]: {
        padding: '5px 30px',
        borderRadius: '6px',
        color: 'white',
        background: "linear-gradient(45deg, #8635b9, #1175bd, #15c5e1)",
    }
}));

const Projects: NextPage = () => {
    return (
        <Root className={classes.main}>
            <Grid container className={classes.container}>
                {projects.map((project, index) => {
                    return (
                        <Grow in key={index} style={{transformOrigin: '0 0 0'}} timeout={1200}>
                            <Grid item md={5} sm={5} xs={11} className={classes.cardContainer}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <div style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center', marginBottom: '12px'}}>{project.title}</div>
                                        <ul>
                                            {project.description.map((p, idx) => {
                                                return(
                                                    <li key={idx} style={{margin: 1}}>{p}</li>
                                                )}
                                            )}
                                        </ul>
                                        <div className={classes.center} style={{flexWrap: 'wrap'}}>
                                            {project.stack.map((p, idx) => {
                                            return(
                                                <Chip label={p} color='primary' variant="outlined" key={idx} sx={{margin: 1}}/>
                                                )}
                                            )}
                                        </div>
                                        {project.url &&
                                        <a href={project.url} target="_blank" rel="noreferrer" className={classes.center} style={{margin: '15px 5px'}}>
                                            <span className={classes.btnStyle}>Click to view project</span>
                                        </a>
                                        }
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grow>
                    )}
                )}
            </Grid>
        </Root>
    )
}

export default Projects;