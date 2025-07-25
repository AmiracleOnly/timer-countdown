import React, { useState, useRef, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import {
    CountdownContainer,
    ControlButtons,
    StyledButton,
} from "./timerStyle";

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const startTimeRef = useRef<number | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const pausedTimeRef = useRef<number>(0);

    const tick = useCallback(() => {
        if (startTimeRef.current !== null) {
            const now = performance.now();
            setElapsedTime(now - startTimeRef.current + pausedTimeRef.current);
            animationFrameRef.current = requestAnimationFrame(tick);
        }
    }, []);

    const handleStartPauseResume = () => {
        if (isRunning) {
            setIsRunning(false);
            pausedTimeRef.current = elapsedTime;
            startTimeRef.current = null;
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        } else {
            setIsRunning(true);
            startTimeRef.current = performance.now();
            animationFrameRef.current = requestAnimationFrame(tick);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        startTimeRef.current = null;
        pausedTimeRef.current = 0;
        setElapsedTime(0);
    };

    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:` +
               `${seconds.toString().padStart(2, '0')}.` +
               `${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <CountdownContainer>
            <Typography variant="h5" component="h2" gutterBottom>Таймер</Typography>
            <p style={{ fontSize: '3em', fontFamily: 'monospace' }}>
                {formatTime(elapsedTime)}
            </p>
            <ControlButtons>
                <StyledButton onClick={handleStartPauseResume}>
                    {isRunning ? 'Пауза' : (elapsedTime > 0 ? 'Возобновить' : 'Запустить')}
                </StyledButton>
                <StyledButton onClick={handleReset} disabled={elapsedTime === 0 && !isRunning}>
                    Сбросить
                </StyledButton>
            </ControlButtons>
        </CountdownContainer>
    );
};

export default React.memo(Timer);
