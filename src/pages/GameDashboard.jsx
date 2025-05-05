import React, { use, useState } from 'react'
import pitch from '../components/png/Pitch.png'
import { useEffect } from 'react';

const GameDashboard = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [position, setPosition] = useState({ left: 0, top: 0 })


    const moveBall = () => {

        const left = Math.floor(Math.random() * 300);
        const top = Math.floor(Math.random() * 150);
        setPosition({ left, top });
    }

    useEffect(() => {
        moveBall();
        const ballTimer = setInterval(() => {
            moveBall();
        }, 1000);
    
        return () => clearInterval(ballTimer);
    }, []);



    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => {
                if (prev + 1 === 60) {
                    setMinutes(m => m + 1);
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);

        if (minutes === 45) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [minutes]);

    return (
        <div id='top' className='bg-[#444444] px-4 lg:px-24 py-4 gap-6 flex flex-col items-center justify-center'>
            <p className=' text-white font-bold text md:text-[32px] '>Paris Saint Germane vs Arsenal</p>

            <div className='flex flex-col w-full items-center justify-center'>
                <div id='timer&goals' className='bg-[#111111] p-2 w-fit text-white flex gap-2'>
                    <p>Psg</p>
                    <p>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
                    <p>Arsenal</p>
                </div>
                <div id='pitch' style={{ backgroundImage: `url(${pitch})` }} className='w-full h-[200px] md:h-[600px] border border-white bg-cover bg-center bg-no-repeat relative'>
                    <div id='ballMovement' className=''></div>
                    <div className="absolute border border-white/10 bg-white rounded-full w-5 h-5"
                        style={{left: `${position.left}px`,top: `${position.top}px`,}}
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default GameDashboard