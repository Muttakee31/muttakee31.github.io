import {indigo, pink} from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: indigo,
        secondary: pink,
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: indigo,
        secondary: pink,
    },
});