'use client'
import logo from '@/public/assets/svg/logo.svg'
import Menu from '@/public/assets/svg/Menu'
import Image from 'next/image'

import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <header className='h-[80px] relative'>
            <div className='text-sm h-[100%] w-[80%] m-auto flex justify-between items-center  max-md:hidden'>
                <nav className='flex items-center gap-8'>
                    <Image src={logo} alt='logo' width={0} height={0} priority className='w-[80px] h-[30px] fill-white text-white' onClick={() => window.location.href = 'https://kingsworks.vercel.app'} />
                    <ul className='flex gap-4 text-Gray-500 font-extrabold'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </nav>
                <div className='flex gap-6 items-center'>
                    <button className=' text-[var(--Gray-500)] font-bold'>Login</button>
                    <button className='teal rounded-2xl py-1.5 px-3'>Sign Up</button>
                </div>
            </div>
            {/* For Mobile  */}
            <div className='text-sm h-[100%] w-[80%] m-auto hidden  justify-between items-center  max-md:flex'>
                <Image src={logo} alt='logo' width={0} height={0} priority className='w-[80px] h-[30px] fill-white text-white' onClick={() => window.location.href = 'https://kingsworks.vercel.app'} />
                <button onClick={handleOpen} className='cursor-pointer transition hover:scale-105 '><Menu className={`${isOpen ? 'rotate-90' : ''} transition`} /></button>
            </div>
            <div className={`bg-Purple-950 p-10 rounded-2xl ${isOpen ? 'flex' : 'hidden'} flex-col items-center text-center absolute w-[80%] left-[50%] translate-x-[-50%] z-20  md:hidden`}>
                <ul className='flex flex-col gap-6 text-white font-extrabold'>
                    <li><a href="#shorten">Features</a></li>
                    <li><a href="#shorten">Pricing</a></li>
                    <li><a href="#footer">Resources</a></li>
                </ul>
                <div className='h-.1 w-full border-t-2 border-t-white my-6'></div>
                <div className='flex flex-col gap-6 w-full items-center'>
                    <button className=' text-white font-bold w-full' onClick={() => window.location.href = 'https://kingsworks.vercel.app'}>Login</button>
                    <button className='teal rounded-2xl py-1.5 px-3 w-full' onClick={() => window.location.href = 'https://kingsworks.vercel.app'}>Sign Up</button>
                </div>
            </div>
        </header>
    )
}

export default Header