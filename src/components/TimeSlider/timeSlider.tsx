import { FC } from 'react'
import { Box, Typography, Slider } from '@mui/material'

interface Props {
  minutes: number
  seconds: number
  setTime: (m: number, s: number) => void
  isRunning: boolean
}

const TimeSlider: FC<Props> = ({ minutes, seconds, setTime, isRunning }) => {
  const totalSeconds = minutes * 60 + seconds

  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') return
    const newMinutes = Math.floor(newValue / 60)
    const newSeconds = newValue % 60
    setTime(newMinutes, newSeconds)
  }

  return (
    <Box sx={{ width: 300, m: 2 }}>
      <Typography gutterBottom>
        Слайдер времени (0 - 60 мин, шаг 15 сек)
      </Typography>
      <Slider
        value={totalSeconds}
        min={0}
        max={3600}
        step={15}
        onChange={handleChange}
        disabled={isRunning}
        valueLabelDisplay="auto"
        valueLabelFormat={(v) => `${Math.floor(v / 60)}:${String(v % 60).padStart(2, '0')}`}
      />
    </Box>
  )
}

export default TimeSlider


