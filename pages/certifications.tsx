import {NextPage} from "next";
import {certificates} from "../utils/certifications";
import {Grid, Grow} from "@mui/material";
import {styled} from "@mui/material/styles";

const classes = {
    main: 'main',
    container: `container`,
    card: 'card',
    grid: 'grid',
    btnStyle: 'btnStyle',
    content: 'content',
    title: 'title'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.main}`]: {
        width: '80vw',
        marginX: '10vw'
    },
    [`& .${classes.container}`]: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '40px 20px'
    },
    [`& .${classes.card}`]: {
        margin: '24px 16px',
        border: "2px solid",
        width: '100%',
        padding: '16px',
        borderImage: "linear-gradient(#8635b9, #1175bd, #15c5e1) 30",
        boxShadow:  theme.palette.mode === 'light' ? '0 30px 40px -20px #a3a5ae' : '0 30px 40px -20px #0e1e68',
        [`&:hover`]: {
            transform: 'translateY(-5px)'
        }
    },
    [`& .${classes.grid}`]: {
        display: 'flex',
        flexDirection: 'row',
    },
    [`& .${classes.content}`]: {
        display: 'flex',
         flexDirection: 'column'
    },
    [`& .${classes.title}`]: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    [`& .${classes.btnStyle}`]: {
        margin: '4px',
        padding: '15px 45px',
        textAlign: 'center',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'white',
        backgroundImage: 'linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980 100%)',
        borderRadius: '10px',
        [`&:hover`]: {
            backgroundPosition: 'right center',
            color: '#fff',
            textDecoration: 'none'
        }
    },
}));

const Certifications: NextPage = () => {
    return (
        <Root className={classes.main}>
            <Grid container className={classes.container}>
                {certificates.map((certificate, index) => {
                    return (
                        <Grow in key={index} style={{transformOrigin: '0 0 0', margin: '20px'}} timeout={1200}>
                            <Grid item md={10} sm={10} xs={11} className={classes.grid}> 
                                <img src={certificate.logo} alt={certificate.title} width={48} height={48} style={{margin: "auto 20px"}}/>
                                <div className={classes.content}>
                                    <div className={classes.title}>{certificate.title}</div>
                                    <div style={{marginBottom: '20px'}}>Issued at: {certificate.achievedOn}</div>
                                    {certificate.url &&
                                        <a href={certificate.url} target="_blank" rel="noreferrer" style={{margin: '8px'}}>
                                            <span className={classes.btnStyle}>View Certificate</span>
                                        </a>
                                    }
                                </div>
                            </Grid>
                        </Grow>
                    )}
                )}
            </Grid>
        </Root>
    )
}

export default Certifications;