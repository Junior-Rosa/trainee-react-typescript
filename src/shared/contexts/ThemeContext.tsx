import React, {
    createContext,
    useCallback,
    useMemo,
    useState,
    ReactNode,
    useContext,
} from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
}

interface IAppThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
    children,
}) => {
    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
    }, []);
    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;

        return DarkTheme;
    }, [themeName]);
    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width={"100vw"}
                    height={"100vh"}
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
