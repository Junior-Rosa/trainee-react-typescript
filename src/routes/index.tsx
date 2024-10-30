import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";
import { SwitchTheme } from "../shared/components/SwitchTheme";
import { Button } from "@mui/material";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <>
                        <SwitchTheme onEvent={toggleTheme} />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={toggleDrawerOpen}
                        >
                            Toggle Menu
                        </Button>
                    </>

                    // <Button
                    //     variant="contained"
                    //     color="primary"
                    //     onClick={toggleTheme}
                    // >
                    //     Toggle
                    // </Button>
                }
            />
            <Route path="/404-not-found" element={<p>404</p>} />
            <Route path="*" element={<Navigate to={"/404-not-found"} />} />
        </Routes>
    );
};
