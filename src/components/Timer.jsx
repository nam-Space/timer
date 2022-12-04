import React, { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                alert("Time's up!");
            }
        }, 1000);
        return () => clearTimeout(timerId);
    }, [time]);

    return (
        <div className="container">
            <h1>Count down from {time}</h1>
        </div>
    );
};

export default Timer;
