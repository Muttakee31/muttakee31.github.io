import LinearProgress from '@mui/material/LinearProgress';
import {withStyles} from "@mui/styles";

const BorderLinearProgress = withStyles(theme => ({
    bar: {
        borderRadius: 8,
        backgroundImage: "linear-gradient(to right, #15c5e1, #8635b9)",
        zIndex: 120
    }
}))(LinearProgress);

export const Loader = () => {
    return (
        <BorderLinearProgress variant='indeterminate' />
    )
}