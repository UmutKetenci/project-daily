import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Button from "./Button";

const Clock = () => {
  const { time, setTime, start, stop, reset } = useGlobalContext();
  return (
    <div className="clock">
      <div className="display-time">
        {time.h}:{time.m}:{time.s}.{time.ms}
      </div>
      <Button text={"Start"} func={start}></Button>
      <Button text={"Stop"} func={stop}></Button>
      <Button text={"Reset"} func={reset}></Button>
    </div>
  );
};

export default Clock;
