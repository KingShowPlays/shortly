'use client'
import React from 'react'
import BoostD from '@/public/assets/svg/bg-boost-desktop.svg'
import Image from 'next/image'

const GetStarted = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 relative h-[150px] bg-Purple-950 z-10'>
            <Image src={BoostD} alt="me" width={0} height={0} className='absolute w-full h-full z--1' />
            <h2 className='text-white text-3xl z-10 relative'>Boost your links today</h2>
            <button className='z-10 relative rounded-2xl teal py-1.5 px-3' onClick={() => window.location.href = '#shorten'}>Get Started</button>
        </div>
    )
}

export default GetStarted