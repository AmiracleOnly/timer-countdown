import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {}
  interface ThemeOptions {}
}

export const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#007aff' },
    secondary: { main: '#ff2d55' },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  }
})
