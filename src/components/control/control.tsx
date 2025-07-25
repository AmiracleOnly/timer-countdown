import { FC } from 'react'
import {
  ControlButtons,
  StyledButton,
} from "../Countdown/countdownStyle"

interface Props {
  isRunning: boolean
  start: () => void
  pause: () => void
  reset: () => void
}

const Controls: FC<Props> = ({ isRunning, start, pause, reset }) => {
  return (
    <ControlButtons>
      <StyledButton
        variant="contained"
        color={isRunning ? "warning" : "primary"}
        onClick={isRunning ? pause : start}
      >
        {isRunning ? "Пауза" : "Старт"}
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        onClick={reset}
      >
        Сброс
      </StyledButton>
    </ControlButtons>
  )
}

export default Controls
