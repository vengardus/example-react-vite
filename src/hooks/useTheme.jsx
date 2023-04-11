import { useState, useContext, createContext } from 'react'

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children, theme1, ...props }) => {
  const [theme] = useState(theme1)

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
