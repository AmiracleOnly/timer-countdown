import './App.css'
import { Theme } from './components/context/ThemeProvider'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Timer from './components/Timer/Timer.'
import Countdown from './components/Countdown/countdown'

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div>
          <Countdown />
      </div>
      <div>
        <Timer />
      </div>
    </ThemeProvider>
  )
}

export default App
