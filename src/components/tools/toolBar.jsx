import { useTheme } from '../../hooks/useTheme'

export const ToolBar = () => {
  const [theme, setTheme] = useTheme()

  return (
    <button
      onClick={() => setTheme((theme === 'light') ? 'dark' : 'light')}
    >
      Change Theme
    </button>
  )
}
