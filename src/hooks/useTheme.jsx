import { useState, useContext, createContext, Children } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ( { theme1, ...props } ) => {
    const [ theme, setTheme ] = useState( theme1 )
    
    return (<ThemeContext.Provider value={ { theme } }></ThemeContext.Provider>)
}

export const useTheme = () => useContext( ThemeContext )

