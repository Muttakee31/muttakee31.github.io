import {amber, cyan, indigo, pink, red} from "@mui/material/colors";
import {createTheme} from "@mui/material";


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: cyan,
        secondary: amber,
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: indigo,
        secondary: red,
    },
});