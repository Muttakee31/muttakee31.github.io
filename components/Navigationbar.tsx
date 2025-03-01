import * as React from 'react';
import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {IconButton, Tabs, Theme, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, ListItemButton} from "@mui/material";
import {styled} from "@mui/material/styles";
import {navItems, paths} from "../utils/constants";
import {lightTheme} from "../utils/theme";
import LinkTab from "./LinkTab";
import {useRouter} from "next/router";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

const classes = {
    appBar: `appBar`,
    transparentAppBar: 'transparentAppBar',
    toolbarPublic: `toolbar`,
    header: 'header',
    tabContainer: 'tabContainer',
    tabStyle: 'tabStyle',
    lightThemeButton: 'lightThemeButton',
    darkThemeButton: 'darkThemeButton',
    menuButton: 'menuButton',
    drawer: 'drawer',
    drawerPaper: 'drawerPaper',
    drawerItem: 'drawerItem',
    drawerItemSelected: 'drawerItemSelected'
}

const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.appBar}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.palette.mode === 'dark' ? '1px 14px 43px -1px rgba(42, 36, 22, 0.34)' :'1px 14px 43px -1px rgba(213, 219, 233, 0.66)',
    },
    [`& .${classes.transparentAppBar}`]: {
        borderBottom: `none`,
        boxShadow: 'none',
    },
    [`& .${classes.toolbarPublic}`]: {
        flexWrap: 'wrap',
        minHeight: '68px',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end'
        },
        [theme.breakpoints.down('md')]: {
            padding: 0,
            justifyContent: 'center'
        },

    },
    [`& .${classes.header}`]: {
        fontSize: '1.25em',
        marginRight: 'auto',
        marginLeft: '16px'
    },
    [`& .${classes.tabContainer}`]: {
        [theme.breakpoints.down('sm')]: {
            width: '88%',
        }
    },
    [`& .${classes.tabStyle}`]: {
        [theme.breakpoints.down('sm')]: {
            minWidth: 'auto',
            padding: '6px 8px',
        }
    },
    [`& .${classes.lightThemeButton}`]: {
        color: '#FFFF99'
    },
    [`& .${classes.darkThemeButton}`]: {
        color: '#191970'
    },
    [`& .${classes.menuButton}`]: {
        margin: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    [`& .${classes.drawer}`]: {
        width: '45vw',
        backgroundColor: theme.palette.background.paper,
    },
    [`& .${classes.drawerPaper}`]: {
        width: '45vw',
        backgroundColor: theme.palette.background.paper,
    },
    [`& .${classes.tabContainer}`]: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    [`& .${classes.drawerItem}`]: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.04)',
        }
    },
    [`& .${classes.drawerItemSelected}`]: {
        backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.16)'
            : 'rgba(0, 0, 0, 0.08)',
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.24)'
                : 'rgba(0, 0, 0, 0.12)',
        }
    },
}));

type navProps = {
    themeKey: Theme,
    children: React.ReactNode,
    changeTheme: ()=> void
}

const Navigationbar = ({themeKey, children, changeTheme}: navProps) => {
    const router = useRouter();
    const [value, setValue] = useState(0);
    const [checked, setChecked] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(()=> {
        if (window.localStorage?.getItem('theme') === '1') {
            setChecked(1);
        }
        setValue(paths.indexOf(router.pathname));
    }, [router.pathname])
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleThemeChange = () => {
        setChecked(checked * -1);
        changeTheme();
    }
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleDrawerItemClick = (url: string, index: number) => {
        setValue(index);
        router.push(url);
        setMobileOpen(false);
    };

    const drawer = (
        <div>
            <List sx={{ width: '100%', padding: 1 }}>
                {navItems.map((item, idx) => (
                    <ListItemButton
                        key={idx} 
                        onClick={() => handleDrawerItemClick(item.url, idx)}
                        selected={value === idx}
                        className={`${classes.drawerItem} ${value === idx ? classes.drawerItemSelected : ''}`}
                    >
                        <ListItemText 
                            primary={item.title}
                            sx={{
                                '& .MuiTypography-root': {
                                    color: value === idx ? 'rgb(26, 127, 143)' : 'inherit'
                                }
                            }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <Root>
                <AppBar position="fixed" color={router.pathname === "/" ? "transparent" : "inherit"} className={router.pathname === "/" ? classes.transparentAppBar : classes.appBar}>
                    <Toolbar className={classes.toolbarPublic}>
                        <div className={classes.header}>
                            Hey there, I am Saad
                        </div>
                        <Tabs value={value} onChange={handleTabChange} aria-label="nav tabs"
                            variant="scrollable" allowScrollButtonsMobile className={classes.tabContainer}>
                            {navItems.map((item, idx) => {
                                return(
                                    <LinkTab label={item.title} href={item.url} key={idx} className={classes.tabStyle}/>
                                )
                            })}
                        </Tabs>
                        <IconButton className={themeKey === lightTheme ? classes.darkThemeButton : classes.lightThemeButton}
                            onClick={handleThemeChange}
                            title={themeKey === lightTheme ? "Switch to dark mode": "Switch to light mode"}>
                            {themeKey === lightTheme ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Root>
            {children}
        </>
    );
}

export default Navigationbar;