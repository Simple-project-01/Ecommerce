import React, { useState, useEffect } from "react"

const Clock: React.FC = () => {

    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
  
    useEffect(() => {
      const destination = new Date("April 31, 2025").getTime();
  
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = destination - now;
  
        if (difference < 0) {
          clearInterval(interval);
          setDays(0);
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          return;
        }
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);
  
 
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-4 flex lg:justify-normal  justify-center gap-4">
            <div className="flex items-center gap-4">
                <div className="text-white font-poppins">
                    <h1 className="text-xl font-poppins">{days}</h1>
                    <h5 className="text-sm font-poppins">Days</h5>
                </div>
                <span className="text-white text-xl font-poppins">:</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-white flex flex-col items-center">
                    <h1 className="text-xl font-poppins">{hours}</h1>
                    <h5 className="text-sm font-poppins">Hours</h5>
                </div>
                <span className="text-white text-xl font-poppins">:</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-white flex flex-col items-center">
                    <h1 className="text-xl font-poppins">{minutes}</h1>
                    <h5 className="text-sm font-poppins">Minutes</h5>
                </div>
                <span className="text-white text-xl">:</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-white flex flex-col items-center">
                    <h1 className="text-xl font-poppins">{seconds}</h1>
                    <h5 className="text-sm font-poppins">Seconds</h5>
                </div>
            </div>
        </div>
    )
}

export default Clock