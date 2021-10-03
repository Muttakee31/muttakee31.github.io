import {Container, Grid, Paper} from "@mui/material";
import {interests} from "../utils/constants";
import {NextPage} from "next";

const Research : NextPage= () => {
    return (
        <Container>
            <h4>Research Interest</h4>
            <Grid container>
                {interests.map((interest, index) => {
                    return (
                        <Grid key={index} item xs={4} style={{paddingBottom: '24px', paddingRight: '24px'}}>
                            <Paper style={{padding: '16px', borderRadius: '4px', boxShadow: '0 10px 14px -6px ' + interest.color ,
                                borderBottom: '5px solid ' + interest.color}}>
                                {interest.name}
                            </Paper>
                        </Grid>
                        )
                    })
                }
            </Grid>
            <div>
                <h4>Undergrad Thesis</h4>
                Title: Facility Assignment On a Plane <br />
                Supervised by: Dr. Md. Saidur Rahman sir <br />
                Description: <br />
                Topic: Graph theory, Online computation
            </div>
        </Container>
    )
}

export default Research

