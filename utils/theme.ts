import {amber, cyan, indigo, red} from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: cyan,
        secondary: amber,
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: indigo,
        secondary: red,
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(',')
    }
});