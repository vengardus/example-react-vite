import { useState, useContext, createContext } from "react";

const ThemeContext = createContext()

export const useTheme = () => useContext( themeContext )

export const ThemeProvider = ( { theme1, ...rest} ) => {
    const [ theme, setTheme ] = useState( theme1)
 
    return (<ThemeContext.Provider value={ [ theme, setTheme ] }/>)
}

