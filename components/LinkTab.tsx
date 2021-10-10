import {Tab} from "@mui/material";
import {useRouter} from "next/router";

export interface LinkTabProps {
    label: string;
    href: string;
}

export default function LinkTab(props: LinkTabProps) {
    const router = useRouter();
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                router.push(props.href)
            }}
            {...props}
        />
    );
}
