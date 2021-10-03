import {ReactNode, SyntheticEvent, useState} from "react";
import {Box, Card, Grid, Tab, Tabs, Container, Typography, Zoom} from "@mui/material";
import {tabs} from "../utils/constants";
import {entities} from "../utils/entities";
import {NextPage} from "next";

interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: '24px 0' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


const Skills: NextPage = () => {
    const [tabStatus, setTabStatus] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setTabStatus(newValue);
    };

    return (
        <Container sx={{display: 'flex', flex: 1, width: '100vw', flexDirection: 'column', justifyContent: 'center', marginTop: '24px'}}>
            <Tabs
                value={tabStatus}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleChange}
                sx={{alignSelf: 'center'}}
                >
                {tabs.map((t, idx) => {
                    return (
                        <Tab key={idx} label={t} />
                    )
                })}
            </Tabs>
            {tabs.map((t, idx) => {
                return (
                    <TabPanel key={idx} index={idx} value={tabStatus}>
                        <Grid container sx={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                            {entities.filter(m => m.tab === tabStatus).map((t, index) => {
                                return (
                                    <Grid item xs={6} sm={4} md={3} key={index} sx={{alignSelf: 'center'}}>
                                        <Zoom in style={{ transitionDelay: '400ms', transitionDuration: '600ms'}}>
                                            <Card key={index}
                                                  sx={{borderRadius: '8px', display: 'flex', margin: 2, padding: 2,
                                                      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                                      boxShadow: (theme) =>
                                                          theme.palette.mode === 'light' ? '0px 12px 56px -10px #ccc' : '0px 12px 56px -6px #000'}}>
                                                <img src={t.image} alt={t.name} height={48} />
                                                <Typography sx={{textAlign: 'center'}}>{t.name}</Typography>
                                            </Card>
                                        </Zoom>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </TabPanel>
                )
            })}
        </Container>
    )
}

export default Skills