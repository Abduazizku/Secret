import { useState, useEffect } from 'react';
import Button from '../Button/Button';

function Stopwatch() {
     const [seconds, setSeconds] = useState(0);
     const [isRunning, setIsRunning] = useState(false);

     useEffect(() => {
          let interval;
          if (isRunning) {
               interval = setInterval(() => {
                    setSeconds(prev => prev + 1);
               }, 1000);
          } else {
               clearInterval(interval);
          }
          return () => clearInterval(interval);
     }, [isRunning]);

     const handleStart = () => {
          setIsRunning(true);
     };

     const handleStop = () => {
          setIsRunning(false);
     };

     const handleReset = () => {
          setIsRunning(false);
          setSeconds(0);
     };

     return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h1>Sekundomer</h1>
               <h2>{seconds} sekund</h2>

               {!isRunning && (
                    <Button onClick={handleStart} title='Start' />
               )}

               <Button
                    onClick={handleStop}
                    disabled={!isRunning}
                    title='Stop'
                    op={ isRunning ? 1 : 0.5}
                    cr={ isRunning ? "pointer" : "not-allowed"}
               />

               <Button onClick={handleReset} style={{ marginLeft: '10px' }} title='Refresh' />

          </div>
     );
}

export default Stopwatch;
