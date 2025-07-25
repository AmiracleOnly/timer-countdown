import { FC } from 'react'
import { CenteredTimeContent, TimeInput, TimeSeparator, TimeDisplaySpan } from '../Countdown/countdownStyle'

interface Props {
  minutes: number
  seconds: number
  setTime: (m: number, s: number) => void
  isRunning: boolean
}

const TimeInputs: FC<Props> = ({ minutes, seconds, setTime, isRunning }) => {
  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/^0+(?=\d)/, '')
    let num = parseInt(value)
    if (isNaN(num)) num = 0
    num = Math.min(720, Math.max(0, num))
    setTime(num, seconds)
  }

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/^0+(?=\d)/, '')
    let num = parseInt(value)
    if (isNaN(num)) num = 0
    num = Math.min(59, Math.max(0, num))
    setTime(minutes, num)
  }

  return (
    <CenteredTimeContent>
      {isRunning ? (
        <>
          <TimeDisplaySpan>{String(minutes).padStart(2, '0')}</TimeDisplaySpan>
          <TimeSeparator>:</TimeSeparator>
          <TimeDisplaySpan>{String(seconds).padStart(2, '0')}</TimeDisplaySpan>
        </>
      ) : (
        <>
          <TimeInput
            type="number"
            value={minutes}
            onChange={handleMinutesChange}
            disabled={isRunning}
          />
          <TimeSeparator>:</TimeSeparator>
          <TimeInput
            type="number"
            value={seconds}
            onChange={handleSecondsChange}
            disabled={isRunning}
          />
        </>
      )}
    </CenteredTimeContent>
  )
}

export default TimeInputs
