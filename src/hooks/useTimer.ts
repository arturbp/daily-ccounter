import { useCallback, useEffect, useState } from "react";

export const interval = (delay = 0) => (callback: any) => (
  useEffect(() => {
    const id = setInterval(callback, delay);

    return () => clearInterval(id);
  }, [callback])
)

const use1Second = interval(1e3);

export const useTimer = ({
    initialSeconds = 0,
    initiallyRunning = false
} = {}) => {
    const [time, setTime] = useState(initialSeconds);
    const [running, setRunning] = useState(initiallyRunning);

    const tick = useCallback(
        () => (running ? setTime(seconds => seconds + 1) : undefined),
        [running]
    );

    const start = () => setRunning(true);
    const pause = () => setRunning(false);
    const reset = () => setTime(0);
    const stop = () => {
        pause();
        reset();
    };
    const continueCount = () => running ? pause() : start()

    use1Second(tick);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return { pause, reset, running, time, minutes,seconds, start, stop, continueCount };
};