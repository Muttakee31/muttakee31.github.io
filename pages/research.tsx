import {Chip, Container, Grid, Paper} from "@mui/material";
import {interests} from "../utils/interests";
import {NextPage} from "next";

const Research : NextPage= () => {
    return (
        <Container>
            <h4>Research Interest</h4>
            <Grid container>
                {interests.map((interest, index) => {
                    return (
                        <Grid key={index} item sm={4} xs={6} style={{alignSelf: 'stretch', paddingBottom: '24px', paddingRight: '24px'}}>
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
                Description: Consider an online facility assignment problem where a set of facilities
                of equal capacity - is situated on a metric space and customers arrive one by one
                in an online manner on that space. We assign a customer to a facility before a new customer arrives. <br />
                The objective of this problem is to minimize the sum of all assignment costs. The approach uses Voronoi Diagram to to calculate
                a competitive ratio for facilities on a plane.
                <br />
                Topic:
                <Chip label="Graph theory" color="primary" variant="outlined" sx={{m: 1}}/>
                <Chip label="Online algorithms" color="primary" variant="outlined" sx={{m: 1}}/>
            </div>

            <div style={{marginTop: '24px'}}>
                <h4>Current position</h4>
                Right now I am working with Dr. Abu Reyan Ahmed to produce new results for online facility assignment problem.
                You can find one of our earlier collaboration <a target="_blank" rel="noreferrer" href="https://arxiv.org/pdf/2009.01446">here</a>
            </div>
        </Container>
    )
}

export default Research

