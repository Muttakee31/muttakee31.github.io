import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link, Switch} from "@mui/material";
import {useRouter} from 'next/router';
import {styled} from "@mui/material/styles";
import {darthLogo, jediLogo} from "../utils/constants";
import {darkTheme} from "../utils/theme";

const classes = {
    appBar: `appBar`,
    toolbarPublic: `toolbar`,
    link: 'link',
    link_focused: 'link_focused'
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.appBar}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
    },
    [`& .${classes.toolbarPublic}`]: {
        flexWrap: 'wrap',
        minHeight: '68px'
    },
    [`& .${classes.link}`]: {
        margin: theme.spacing(1, 1.5),
        cursor: 'pointer',
        textDecoration: 'none'
    },
    [`& .${classes.link_focused}`]: {
        color: '#20779f',
        textDecoration: 'none',
        margin: theme.spacing(1, 1.5),
        borderBottomColor: '#20779F',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid',
        cursor: 'default',
        '&:hover': {
            textDecoration: 'none !important'
        }
    }
}));

const Navigationbar = ({themeKey, changeTheme}) => {
    const router = useRouter();
    const [checked, setChecked] = useState(-1);

    const handleChange = () => {
        setChecked(checked * -1);
        changeTheme();
    }

    return (
        <Root className={classes.appBar}>
            <AppBar position="sticky" color="inherit">
                <Toolbar className={classes.toolbarPublic}>
                    <Typography variant="h5">
                        Hey there, I am Saad
                    </Typography>
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