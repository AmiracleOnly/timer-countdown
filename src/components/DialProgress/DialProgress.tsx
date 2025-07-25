import { FC } from 'react'
import { CircularProgressSVG } from '../Countdown/countdownStyle'

interface Props {
  radius?: number
  progress?: number
  strokeColor?: string
}

const DialProgress: FC<Props> = ({ radius = 130, progress = 0, strokeColor = '#3f51b5' }) => {
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <CircularProgressSVG viewBox="0 0 300 300">
      <circle
        stroke="#ccc"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="150"
        cy="150"
        transform="rotate(-90 150 150)"
      />
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
        r={radius}
        cx="150"
        cy="150"
        transform="rotate(-90 150 150)"
      />
    </CircularProgressSVG>
  )
}

export default DialProgress
