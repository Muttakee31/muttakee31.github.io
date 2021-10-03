import {NextPage} from "next";
import {projects} from "../utils/projects";
import {Badge, Card, CardContent, Chip, Grid, Typography} from "@mui/material";

const Projects: NextPage = () => {
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
            {projects.map((project, index) => {
                return (
                    <Grid key={index} item xs={10} md={4}>
                        <Card sx={{margin: '20px', width: '30vw', border: "2px solid",
                            boxShadow:  (theme) => theme.palette.mode === 'light' ? '0 30px 40px -20px #a3a5ae' : '0 30px 40px -20px #0e1e68',
                            borderImage: "linear-gradient(#8635b9, #1175bd, #15c5e1) 30"}}>
                            <Typography sx={{textAlign: 'center'}}>{project.title}</Typography>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                                <Typography sx={{textAlign: 'center'}}>{project.description}</Typography>
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
                )}
            )}
        </Grid>
    )
}

export default Projects;