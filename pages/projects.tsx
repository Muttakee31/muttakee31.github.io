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
        margin: '20px',
        width: '30vw',
        border: "2px solid",
        padding: '16px',
        alignSelf: 'stretch',
        borderImage: "linear-gradient(#8635b9, #1175bd, #15c5e1) 30",
        boxShadow:  theme.palette.mode === 'light' ? '0 30px 40px -20px #a3a5ae' : '0 30px 40px -20px #0e1e68',
        [`&:hover`]: {
            transform: 'translateY(-5px)'
        }
    },
    [`& .${classes.cardContent}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }
}));

const Projects: NextPage = () => {
    return (
        <Root className={classes.main}>
            <Grid container className={classes.container}>
                {projects.map((project, index) => {
                    return (
                        <Grow in key={index} style={{transformOrigin: '0 0 0'}} timeout={1200}>
                            <Grid item sm={10} md={5} className={classes.cardContainer}>
                                <Card className={classes.card}>
                                    <div style={{fontSize: '1.2em', fontWeight: 'bold', textAlign: 'center'}}>{project.title}</div>
                                    <CardContent className={classes.cardContent}>
                                        <ul>
                                            {project.description.map((p, idx) => {
                                                return(
                                                    <li key={idx} style={{margin: 1}}>{p}</li>
                                                )}
                                            )}
                                        </ul>
                                        <div style={{alignSelf: 'center'}}>
                                            {project.stack.map((p, idx) => {
                                            return(
                                                <Chip label={p} color='primary' variant="outlined" key={idx} sx={{margin: 1}}/>
                                                )}
                                            )}
                                        </div>
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