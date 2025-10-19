import logo from '@/public/assets/svg/logoW.svg'
import fb from '@/public/assets/svg/icon-facebook.svg'
import tw from '@/public/assets/svg/icon-twitter.svg'
import pi from '@/public/assets/svg/icon-pinterest.svg'
import ins from '@/public/assets/svg/icon-instagram.svg'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer id='footer' className='bg-Gray-950 py-10 relative'>
            <div className="container justify-between max-md:flex-col max-md:items-center max-md:gap-4">
                <Image src={logo} alt='logo' width={0} height={0} className='w-[80px] h-[30px] text-white fill-white' />
                <div className='grid grid-cols-4 gap-4 lg:gap-8 max-md:grid-cols-1 max-md:text-center'>
                    <ul className='text-Gray-500'>
                        <li className='text-white font-bold'>Features</li>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Lists</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                    <ul className='text-Gray-500'>
                        <li className='text-white font-bold'>Resources</li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <ul className='text-Gray-500'>
                        <li className='text-white font-bold'>Company</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                    <div className='grid grid-cols-4 gap-0 place-items-end items-start'>
                        <Image src={fb} alt='logo' width={0} height={0} className='w-[20px] h-[20px]' />
                        <Image src={tw} alt='logo' width={0} height={0} className='w-[20px] h-[20px]' />
                        <Image src={pi} alt='logo' width={0} height={0} className='w-[20px] h-[20px]' />
                        <Image src={ins} alt='logo' width={0} height={0} className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
            <div className='text-center absolute bottom-1 left-[50%] translate-x-[-50%]'>
                <code className='text-white flex gap-1'>© {new Date().getFullYear()}  <a href="https://kingsworks.vercel.app">KingShowPlays</a></code>
            </div>
        </footer>
    )
}

export default Footer