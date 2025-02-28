import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {IconButton, Tabs, Theme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {navItems, paths} from "../utils/constants";
import {lightTheme} from "../utils/theme";
import LinkTab from "./LinkTab";
import {useRouter} from "next/router";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const classes = {
    appBar: `appBar`,
    transparentAppBar: 'transparentAppBar',
    toolbarPublic: `toolbar`,
    header: 'header',
    tabContainer: 'tabContainer',
    tabStyle: 'tabStyle',
    lightThemeButton: 'lightThemeButton',
    darkThemeButton: 'darkThemeButton'
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
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
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

    useEffect(()=> {
        if (window.localStorage?.getItem('theme') === '1') {
            setChecked(1);
        }
        setValue(paths.indexOf(router.pathname));
    }, [router.pathname])

    const handleThemeChange = () => {
        setChecked(checked * -1);
        changeTheme();
    }
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Root>
            {children}
        </>
    );
}

export default Navigationbar;