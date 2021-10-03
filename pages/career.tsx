import {useState} from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {careers} from "../utils/careers";
import {Slide, Typography} from "@mui/material";
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
                                            <Typography variant="h6" component="div">
                                                {career.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {career.position}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {career.timespan}
                                            </Typography>
                                            <Typography variant="body2">
                                                {career.stack}
                                            </Typography>
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