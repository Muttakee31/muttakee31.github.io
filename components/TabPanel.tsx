import {Box} from "@mui/material";
import {ReactNode} from "react";

export interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box sx={{ padding: '24px 0' }}>
            {children}
            </Box>
        )}
        </div>
)}
