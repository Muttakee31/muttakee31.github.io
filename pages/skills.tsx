import {useState} from "react";
import {Box, Card, Grid, Tab, Tabs, Typography} from "@mui/material";
import {entities, tabs} from "../utils/constants";

interface TabPanelProps {
    children?: React.ReactNode;
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const Skills = () => {
    const [tabStatus, setTabStatus] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabStatus(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setTabStatus(index);
    };

    return (
        <>
            <Tabs indicatorColor="secondary"
                  textColor="inherit"
                  onChange={handleChange}>
                {tabs.map((t, idx) => {
                    return (
                        <Tab key={idx} label={t} />
                    )
                })}
            </Tabs>
            {tabs.map((t, idx) => {
                return (
                    <TabPanel index={idx} value={tabStatus}>
                        <Grid container>
                            {entities.filter(m => m.tab === tabStatus).map((t, index) => {
                                return (
                                    <Grid item xs={3} key={index}>
                                        <Card key={index}
                                              sx={{width: '15vw', height: '100px', marginBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                            <img src={t.image} alt={t.name}/>
                                            <Typography>{t.name}</Typography>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </TabPanel>
                )
            })}
        </>
    )
}

export default Skills