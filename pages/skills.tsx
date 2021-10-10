/* eslint-disable @next/next/no-img-element */
import {ReactNode, SyntheticEvent, useState} from "react";
import {Box, Card, Container, Grid, Tab, Tabs, Zoom} from "@mui/material";
import {skillTabs} from "../utils/constants";
import {entities} from "../utils/entities";
import {NextPage} from "next";
import {styled} from "@mui/material/styles";

interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: number;
    value: number;
}

const classes = {
    main: 'main',
    tabContainer: `tabContainer`,
    card: 'card',
    tab: 'tab',
    cardContent: 'cardContent',

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
    [`& .${classes.tabContainer}`]: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    [`& .${classes.card}`]: {
        borderRadius: '8px',
        display: 'flex',
        margin: '16px',
        padding: '16px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: theme.palette.mode === 'light' ? '0px 12px 56px -10px #ccc' : '0px 12px 56px -6px #000',
        [`&:hover`]: {
            transform: 'translateY(-5px)'
        }
    },
    [`& .${classes.tab}`]: {
        [theme.breakpoints.up('sm')]: {
            margin: 'auto'
        }
    },
    [`& .${classes.cardContent}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    }
}));


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
        <Root>
        <Container className={classes.main}>
            <Tabs
                variant="scrollable"
                allowScrollButtonsMobile
                value={tabStatus}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleChange}
                className={classes.tab}
                >
                {skillTabs.map((t, idx) => {
                    return (
                        <Tab key={idx} label={t} />
                    )
                })}
            </Tabs>
            {skillTabs.map((t, idx) => {
                return (
                    <TabPanel key={idx} index={idx} value={tabStatus}>
                        <Grid container className={classes.tabContainer}>
                            {entities.filter(m => m.tab === tabStatus).map((t, index) => {
                                return (
                                    <Grid item xs={6} sm={4} md={3} key={index} sx={{alignSelf: 'center'}}>
                                        <Zoom in style={{ transitionDelay: '400ms', transitionDuration: '600ms'}}>
                                            <Card key={index} className={classes.card}>
                                                <img src={t.image} alt={t.name} height={48} />
                                                <div style={{textAlign: 'center'}}>{t.name}</div>
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
        </Root>
    )
}

export default Skills