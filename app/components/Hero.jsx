'use client'
import Image from 'next/image'
import React from 'react'
import Hero from '@/public/assets/svg/illustration-working.svg'

const HeroPage = () => {
    return (
        <section className='flex w-[90%] pb-2 h-auto ml-auto mb-16 gap-8 max-md:mb-32 max-sm:flex-col-reverse max-sm:mx-auto max-sm:text-center max-sm:w-[100%] overflow-hidden'>
            <div className='flex flex-col items-start justify-center gap-2 max-sm:items-center  max-sm:max-w-[400px] max-sm:w-[90%] max-sm:m-auto'>
                <h1 className='text-4xl font-extrabold'>
                    More than just shorter links
                </h1>
                <p className='text-Gray-500'>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className='teal py-2 px-8 rounded-2xl border-0' onClick={() => window.location.href = '#shorten'} id='shorten'>Get Started</button>
            </div>
            <div className='w-[100%] h-[300px] relative left-10 max-sm:left-20'><Image src={Hero} alt="hero image" width={0} height={0} className='w-[100%] h-[100%]' /></div>
        </section >
    )
}

export default HeroPage