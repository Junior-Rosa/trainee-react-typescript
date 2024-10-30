import {
    ExpandLess,
    ExpandMore,
    Home,
    StarBorder,
    TaxiAlertSharp,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Collapse,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import React, { ReactNode } from "react";
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: ReactNode; // Define que children pode ser qualquer nó React
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    const { isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

    return (
        <>
            <Drawer
                open={isDrawerOpen}
                variant={smDown ? "temporary" : "permanent"}
                onClose={toggleDrawerOpen}
            >
                <Box
                    width={theme.spacing(28)}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        width={"100%"}
                        height={theme.spacing(20)}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Avatar
                            sx={{
                                height: theme.spacing(12),
                                width: theme.spacing(12),
                            }}
                            alt="Junior"
                            src="/static/images/avatar/1.jpg"
                        />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>

                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <TaxiAlertSharp />
                                </ListItemIcon>
                                <ListItemText primary="Favoritos" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            ;
            <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};
