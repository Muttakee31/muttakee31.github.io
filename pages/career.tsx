import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {careers} from "../utils/careers";
import {Slide} from "@mui/material";
import {NextPage} from "next";
import {styled} from "@mui/material/styles";

const classes = {
    main: 'main',
    card: 'card',
    cardContainer: 'cardContainer',
    description: 'description'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.main}`]: {
        display: 'flex',
        flex: 1,
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '24px'
    },
    [`& .${classes.cardContainer}`]: {
        display: 'flex',
        width: '100%'
    },
    [`& .${classes.card}`]: {
        borderRadius: '8px',
        [theme.breakpoints.up('sm')]: {
            width: '400px'
        }
    },
    /*[`& .${classes.cardContent}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }*/
}));


const Career: NextPage = () => {
    return (
        <Root>
            <Timeline position="alternate">
                {careers.map((career, index) => {
                    return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color={index%2===0 ? 'info':'secondary'} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className={classes.cardContainer} style={{justifyContent: index % 2 === 0 ? "flex-start" : "flex-end"}}>
                                <Slide direction={index % 2 === 0 ? "left" : "right"} in mountOnEnter unmountOnExit
                                           style={{transitionDelay: '300ms', transitionDuration: '700ms'}}>
                                    <Card className={classes.card} sx={{background: career.color, boxShadow: '0 13px 19px -6px ' + career.color}}>
                                        <CardContent>
                                            <div style={{fontWeight: 500, fontSize: '1em'}}>
                                                {career.name}
                                            </div>
                                            <div style={{ fontSize: '0.8em' }}>
                                                {career.position}
                                            </div>
                                            <div style={{ fontSize: '0.8em' }}>
                                                {career.stack}
                                            </div>
                                            <div style={{ fontSize: '0.8em', marginBottom: 1.5 }}>
                                                {career.timespan}
                                            </div>
                                            {/*<div style={{fontSize: '0.75em'}}>*/}
                                            {/*    {career.stack}*/}
                                            {/*</div>*/}
                                        </CardContent>
                                    </Card>
                                </Slide>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    )
                })
                }
            </Timeline>
        </Root>
    )
}

export default Career;