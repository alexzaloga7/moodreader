import React, { useState, useEffect, Fragment } from "react";

import "./Timer.scss";

const START_MINUTES = "05";
const START_SECOND = "00";
const START_DURATION = 10;

export default function Timer(): JSX.Element {
  const [currentMinutes, setMinutes] = useState<string>(START_MINUTES);
  const [currentSeconds, setSeconds] = useState<string>(START_SECOND);
  const [isStop, setIsStop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(START_DURATION);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startHandler = (): void => {
    setDuration(parseInt(START_SECOND, 10) + 60 * parseInt(START_MINUTES, 10));
    setIsRunning(true);
  };

  const stopHandler = (): void => {
    setIsStop(true);
    setIsRunning(false);
  };

  const resetHandler = (): void => {
    setMinutes(START_MINUTES);
    setSeconds(START_SECOND);
    setIsRunning(false);
    setIsStop(false);
    setDuration(START_DURATION);
  };

  const resumeHandler = (): void => {
    let newDuration =
      parseInt(currentMinutes, 10) * 60 + parseInt(currentSeconds, 10);
    setDuration(newDuration);
    setIsRunning(true);
    setIsStop(false);
  };

  useEffect(() => {
    if (isRunning === true) {
      let timer = duration;
      let minutes: number, seconds: number;
      const interval = setInterval(() => {
        if (--timer <= 0) {
          resetHandler();
        } else {
          minutes = parseInt((timer / 60).toString(), 10);
          seconds = parseInt((timer % 60).toString(), 10);

          minutes =
            minutes < 10 ? parseInt("0" + minutes.toString(), 10) : minutes;
          seconds =
            seconds < 10 ? parseInt("0" + seconds.toString(), 10) : seconds;

          setMinutes(minutes.toString());
          setSeconds(seconds.toString());
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, duration]);

  return (
    <Fragment>
      <div className="timer">
        <div className="time">
          {currentMinutes}
          <span className="mx-3">:</span>
          {currentSeconds}
        </div>
        <div className="time-button__container">
          {!isRunning && !isStop && (
            <button className="timer-button" onClick={startHandler}>
              START
            </button>
          )}
          {isRunning && (
            <button className="timer-button" onClick={stopHandler}>
              STOP
            </button>
          )}

          {isStop && (
            <button className="timer-button" onClick={resumeHandler}>
              RESUME
            </button>
          )}

          <button
            className="timer-button"
            onClick={resetHandler}
            disabled={!isRunning && !isStop}
          >
            RESET
          </button>
        </div>
      </div>
      <hr className="my-5" />
    </Fragment>
  );
}
