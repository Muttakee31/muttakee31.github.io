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

const Career: NextPage = () => {
    return (
        <div>
            <Timeline position="alternate">
                {careers.map((career, index) => {
                    return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color={index%2===0 ? 'info':'secondary'} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div style={{display: 'flex', justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", width: '100%'}}>
                                <Slide direction={index % 2 === 0 ? "left" : "right"} in mountOnEnter unmountOnExit
                                           style={{transitionDelay: '300ms', transitionDuration: '700ms'}}>
                                    <Card sx={{background: career.color, width: '32vw', borderRadius: '8px', boxShadow: '0 13px 19px -6px ' + career.color}}>
                                        <CardContent>
                                            <div style={{fontWeight: 400, fontSize: '1em'}}>
                                                {career.name}
                                            </div>
                                            <div style={{ fontSize: '0.8em' }}>
                                                {career.position}
                                            </div>
                                            <div style={{ fontSize: '0.8em', marginBottom: 1.5 }}>
                                                {career.timespan}
                                            </div>
                                            <div style={{fontSize: '0.75em'}}>
                                                {career.stack}
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
        </div>
    )
}

export default Career