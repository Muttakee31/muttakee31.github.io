import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Link, Switch, Theme} from "@mui/material";
import {useRouter} from 'next/router';
import {styled} from "@mui/material/styles";
import {darthLogo, jediLogo} from "../utils/constants";
import {darkTheme} from "../utils/theme";

const classes = {
    appBar: `appBar`,
    toolbarPublic: `toolbar`,
    link: 'link',
    header: 'header',
    link_focused: 'link_focused'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.appBar}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
    },
    [`& .${classes.toolbarPublic}`]: {
        flexWrap: 'wrap',
        minHeight: '68px',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end'
        }
    },
    [`& .${classes.header}`]: {
        fontSize: '1.5em',
        marginRight: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    [`& .${classes.link}`]: {
        margin: theme.spacing(1, 1.5),
        cursor: 'pointer',
        textDecoration: 'none'
    },
    [`& .${classes.link_focused}`]: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        margin: theme.spacing(1, 1.5),
        borderBottomColor: theme.palette.primary.main,
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        cursor: 'default',
        '&:hover': {
            textDecoration: 'none !important'
        }
    }
}));

type navProps = {
    themeKey: Theme,
    changeTheme: ()=> void
}

const Navigationbar = ({themeKey, changeTheme}: navProps) => {
    const router = useRouter();
    const [checked, setChecked] = useState(-1);

    useEffect(()=> {
        if (window.localStorage?.getItem('theme') === '1') {
            setChecked(1);
        }
    }, [])

    const handleChange = () => {
        setChecked(checked * -1);
        changeTheme();
    }

    return (
        <Root className={classes.appBar}>
            <AppBar position="sticky" color="inherit" sx={{zIndex: 40}}>
                <Toolbar className={classes.toolbarPublic}>
                    <div className={classes.header}>
                        Hey there, I am Saad
                    </div>
                    <Link variant="button"
                          color="inherit"
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              router.push("/")
                          }}
                          className={router.pathname === "/" ? classes.link_focused : classes.link}
                    >
                        Intro
                    </Link>

                    <Link variant="button"
                          color="inherit"
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              router.push("skills")
                          }}
                          className={router.pathname === "/skills" ? classes.link_focused : classes.link}
                    >
                        Skills
                    </Link>

                    <Link variant="button"
                          color="inherit"
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              router.push("projects")
                          }}
                          className={router.pathname === "/projects" ? classes.link_focused : classes.link}
                    >
                        Projects
                    </Link>

                    <Link variant="button"
                          color="inherit"
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              router.push("research")
                          }}
                          className={router.pathname === "/research" ? classes.link_focused : classes.link}
                    >
                        Research Interest
                    </Link>

                    <Link variant="button"
                          color="inherit"
                          style={{cursor: "pointer"}}
                          onClick={() => {
                              router.push("career")
                          }}
                          className={router.pathname === "/career" ? classes.link_focused : classes.link}
                    >
                        Career
                    </Link>
                    <Switch checked={checked === 1} onChange={handleChange} />
                    <img src={themeKey===darkTheme ? darthLogo : jediLogo} alt="theme" />
                </Toolbar>
            </AppBar>
        </Root>
    );
}

export default Navigationbar;