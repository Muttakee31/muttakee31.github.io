import {useState} from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Career = () => {
    const [item, setItem] = useState({});
    return (
        <div>
            About
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card>
                            <CardContent>
                                are meladin kaj korsi
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card>
                            <CardContent>
                                are meladin kaj korsi
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card>
                            <CardContent>
                                are meladin kaj korsi
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card sx={{width: 300}}>
                            <CardContent>
                                are meladin kaj korsi
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Career