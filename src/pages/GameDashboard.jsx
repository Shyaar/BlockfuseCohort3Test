import React from 'react'
import pitch from '../components/png/Pitch.png'

const GameDashboard = () => {
    return (
        <div id='top' className='bg-[#111111]'>
            <div id='pitch' className='w-full border border-red-500'>
                <img src={pitch} alt="field bg" className='w-full' />
            </div>
        </div>
    )
}

export default GameDashboard