import useCountdown from '../hook/useCountdown'
import TimeSlider from '../TimeSlider/timeSlider'
import TimeInputs from '../TimeInput/timeInput'
import DialProgress from '../DialProgress/DialProgress'
import Controls from '../control/control'
import {
  CountdownContainer,
  DialWrapper,
  } from './countdownStyle'

export default function Countdown() {
  const { minutes, seconds, progress, isRunning, setTime, start, pause, reset } = useCountdown()

  return (
    <CountdownContainer>
      <DialWrapper>
      <DialProgress progress={progress} />
      <TimeInputs minutes={minutes} seconds={seconds} setTime={setTime} isRunning={isRunning}
      />
      </DialWrapper>
      {!isRunning && (
        <TimeSlider minutes={minutes} seconds={seconds} setTime={setTime} isRunning={isRunning}
        />
      )}
      <Controls start={start} pause={pause} reset={reset} isRunning={isRunning}
      />
    </CountdownContainer>
  )
}
