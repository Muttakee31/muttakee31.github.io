import {amber, cyan, indigo, red} from "@mui/material/colors";
import {createTheme} from "@mui/material";

const commonStyle = {
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    '& .MuiTabs-scrollButtons': {
                        width: 'auto',
                        padding: '0 4px'
                    }
                }
            }
        }
    }
};

export const darkTheme = createTheme({
    ...commonStyle,
    palette: {
        mode: 'dark',
        primary: cyan,
        secondary: amber,
    }
});

export const lightTheme = createTheme({
    ...commonStyle,
    palette: {
        mode: 'light',
        primary: indigo,
        secondary: red,
    }
});