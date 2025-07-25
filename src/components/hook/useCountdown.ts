import { useState, useEffect, useRef } from 'react'

export interface CountdownHook {
  minutes: number
  seconds: number
  progress: number
  isRunning: boolean
  setTime: (m: number, s: number) => void
  start: () => void
  pause: () => void
  reset: () => void
}

export default function useCountdown(): CountdownHook {
  const [initialTime, setInitialTime] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement>(new Audio('/sound/pixel-song-21-72593.mp3'))

  const minutes = Math.floor(timeLeft / 60000)
  const seconds = Math.floor((timeLeft % 60000) / 1000)
  const progress = initialTime ? ((initialTime - timeLeft) / initialTime) * 100 : 0

  const setTime = (m: number, s: number) => {
    const ms = (m * 60 + s) * 1000
    setInitialTime(ms)
    setTimeLeft(ms)
  }

  const start = () => {
    if (timeLeft > 0) setIsRunning(true)
  }

  const pause = () => setIsRunning(false)

  const reset = () => {
    setIsRunning(false)
    setTimeLeft(initialTime)
    stopSound()
  }

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1000) {
          if (timerRef.current) clearInterval(timerRef.current)
          playSound()
          setIsRunning(false)
          return 0
        }
        return prev - 1000
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRunning])


  const playSound = () => {
    const audio = audioRef.current
    if (!audio.paused) return
    audio.currentTime = 0
    audio.play().catch(console.error)
  }
  const stopSound = () => {
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0
  }

  return {
    minutes,
    seconds,
    progress,
    isRunning,
    setTime,
    start,
    pause,
    reset
  }
}
