import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Switch, Tabs, Theme} from "@mui/material";
import {styled} from "@mui/material/styles";
import {darthLogo, jediLogo, navItems} from "../utils/constants";
import {darkTheme} from "../utils/theme";
import LinkTab from "./LinkTab";

const classes = {
    appBar: `appBar`,
    toolbarPublic: `toolbar`,
    header: 'header',
}
const Root = styled('div')(( {theme} ) => ({
    [`& .${classes.appBar}`]: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.palette.mode === 'dark' ? '1px 14px 43px -1px rgba(42, 36, 22, 0.34)' :'1px 14px 43px -1px rgba(213, 219, 233, 0.66)',
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
    }
}));

type navProps = {
    themeKey: Theme,
    changeTheme: ()=> void
}

const Navigationbar = ({themeKey, changeTheme}: navProps) => {
    const [value, setValue] = useState(0);
    const [checked, setChecked] = useState(-1);

    useEffect(()=> {
        if (window.localStorage?.getItem('theme') === '1') {
            setChecked(1);
        }
    }, [])

    const handleThemeChange = () => {
        setChecked(checked * -1);
        changeTheme();
    }
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Root>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar className={classes.toolbarPublic}>
                    <div className={classes.header}>
                        Hey there, I am Saad
                    </div>
                    <Tabs value={value} onChange={handleTabChange} aria-label="nav tabs"
                          variant="scrollable" allowScrollButtonsMobile sx={{padding: '8px'}}>
                        {navItems.map((item, idx) => {
                            return(
                                <LinkTab label={item.title} href={item.url} key={idx} />
                            )
                        })}
                    </Tabs>
                    <Switch checked={checked === 1} onChange={handleThemeChange} />
                    <img src={themeKey===darkTheme ? darthLogo : jediLogo} alt="theme" />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Root>
    );
}

export default Navigationbar;