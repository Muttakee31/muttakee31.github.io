import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {careers} from "../utils/careers";
import {Slide, useMediaQuery} from "@mui/material";
import {NextPage} from "next";
import {styled, useTheme} from "@mui/material/styles";

const classes = {
    main: 'main',
    card: 'card',
    cardContainer: 'cardContainer',
    description: 'description'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.main}`]: {
        display: 'flex',
        flex: 0.2,
        width: '100vw',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '24px'
    },
    [`& .${classes.cardContainer}`]: {
        display: 'flex',
        width: '100%',
    },
    [`& .${classes.card}`]: {
        borderRadius: '8px',
        [theme.breakpoints.up('sm')]: {
            width: '400px'
        }
    },
    [`& .${timelineItemClasses.root}:before`]: {
        [theme.breakpoints.down('md')]: {
            flex: 0.1,
            padding: 0,
        },  
    },

    /*[`& .${classes.cardContent}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }*/
}));


const Career: NextPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Root>
            <Timeline position={isMobile ? "right" : "alternate"}>
                {careers.map((career, index) => {
                    return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color={index % 2 === 0 ? 'info':'secondary'} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className={classes.cardContainer} 
                                style={{ justifyContent: isMobile || index % 2 === 0 ? "flex-start" : "flex-end" }}>
                                <Slide 
                                    direction={index % 2 === 0 ? "left" : "right"} 
                                    in mountOnEnter unmountOnExit
                                    style={{ transitionDelay: '300ms', transitionDuration: '700ms' }}
                                >
                                    <Card className={classes.card} 
                                        sx={{ background: career.color, boxShadow: '0 13px 19px -6px ' + career.color }}
                                    >
                                        <CardContent>
                                            <div style={{ fontWeight: 500, fontSize: '1em' }}>
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