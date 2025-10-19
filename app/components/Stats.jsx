'use client'
import React, { useState } from 'react'
import Brand from '@/public/assets/svg/icon-brand-recognition.svg'
import Detail from '@/public/assets/svg/icon-detailed-records.svg'
import Fully from '@/public/assets/svg/icon-fully-customizable.svg'
import Search from '@/public/assets/svg/bg-shorten-desktop.svg'
import Image from 'next/image'

const Stats = () => {
    const [msg, setMsg] = useState('')
    const [link, setLink] = useState('')
    const [links, setLinks] = useState([]) // each item will be { original, short }
    const [copied, setCopied] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!link) {
            setMsg('Enter a Link')
            return
        }

        const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w\-._~:?#[\]@!$&'()*+,;=]*)?$/
        const isValidURL = regex.test(link)

        if (!isValidURL) {
            setMsg(`Enter a valid Link - ${link}`)
            return
        }

        setMsg('')
        setLoading(true)

        try {
            const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BITLY_TOKEN}`, // put your Bitly token in .env.local
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    long_url: link,
                    domain: "bit.ly"
                })
            })

            const data = await res.json()

            if (!res.ok) {
                console.error("Bitly error:", data)
                setMsg("Failed to shorten link. Try again.")
                setLoading(false)
                return
            }

            const shortLink = data.link
            setLinks(prev => [...prev, { original: link, short: shortLink }])
            setLink('')
        } catch (error) {
            console.error("Error shortening link:", error)
            setMsg("Something went wrong. Try again.")
        } finally {
            setLoading(false)
        }
    }

    const copyLink = async (text, id) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(id)
            setTimeout(() => setCopied(null), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <section className='bg-[#f0f1f8] py-5'>
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center transition gap-2 bg-Purple-950 relative py-6 z-10 h-auto w-[80%] m-auto rounded-sm overflow-hidden -top-13 max-sm:flex-col max-sm:-top-20"
            >
                <Image src={Search} alt="me" width={0} height={0} className='absolute w-full h-full z--1' />
                <div className='z-10 w-[60%] max-sm:w-[90%] relative'>
                    <input
                        type="text"
                        placeholder='Shorten a link here...'
                        className={`rounded-sm py-1.5 px-3 bg-white w-[100%] border-2 ${msg ? 'border-red-500 outline-red-500 placeholder:text-red-400' : 'border-transparent'
                            }`}
                        value={link}
                        onChange={(e) => {
                            setLink(e.target.value)
                            if (msg) setMsg('')
                        }}
                    />
                    {msg && <p className='text-red-500 text-sm mt-1 sm:absolute'>{msg}</p>}
                </div>
                <button
                    disabled={loading}
                    className='teal rounded-sm py-1.5 px-3 z-10 w-[30%] max-sm:w-[90%] disabled:opacity-60'
                >
                    {loading ? "Shortening..." : "Shorten it!"}
                </button>
            </form>

            <div className='relative -top-10 container gap-2 flex-col'>
                {links.length > 0 ? (
                    links.map((item, id) => (
                        <div
                            key={id}
                            className='flex justify-between bg-white p-3 rounded-sm items-center max-sm:flex-col max-sm:items-stretch max-sm:px-0'
                        >
                            {/* Original link */}
                            <p className='text-Gray-900 truncate max-sm:p-3'>{item.original}</p>

                            <div className='hidden h-0.5 w-full bg-Gray-400 max-sm:block'></div>


                            <div className='flex items-center gap-2 max-sm:flex-col max-sm:items-stretch p-3'>
                                <a
                                    href={item.short}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-Blue-400 font-bold'
                                >
                                    {item.short}
                                </a>
                                <button
                                    className={`teal py-1.5 px-3 rounded-sm max-sm:w-[100%] ${copied === id ? 'bg-Purple-950' : ''
                                        }`}
                                    onClick={() => copyLink(item.short, id)}
                                >
                                    {copied === id ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-Gray-900 text-center'>No Links yet</p>
                )}
            </div>

            {/* Stats section */}
            <div className='flex flex-col items-center max-w-[400px] w-[90%] m-auto text-center mb-8'>
                <h2 className='font-extrabold text-3xl'>Advanced Statistics</h2>
                <p className='text-Gray-500'>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            <div className='grid grid-cols-3 w-[80%] m-auto gap-8 min-h-[300px] relative max-lg:grid-cols-1'>
                <div className='absolute bg-Blue-400 w-full h-3 flex self-center max-lg:h-full max-lg:w-3 max-lg:left-[50%] max-lg:translate-x-[-50%]' />
                <div className='flex flex-col relative bg-white rounded-sm p-4 self-start h-fit'>
                    <div className='absolute top-0 translate-y-[-50%] w-[50px] h-[50px] bg-Purple-950 rounded-full p-3.5 flex items-center justify-center'>
                        <Image src={Brand} alt="Brand Recognition" width={0} height={0} className='w-[100%] h-[100%]' />
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <h3 className='font-bold text-lg'>Brand Recognition</h3>
                        <p className='text-Gray-500'>
                            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col relative bg-white rounded-sm p-4 self-center h-fit'>
                    <div className='absolute top-0 translate-y-[-50%] w-[50px] h-[50px] bg-Purple-950 rounded-full p-3.5 flex items-center justify-center'>
                        <Image src={Detail} alt="Detailed Records" width={0} height={0} className='w-[100%] h-[100%]' />
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <h3 className='font-bold text-lg'>Detailed Records</h3>
                        <p className='text-Gray-500'>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col relative bg-white rounded-sm p-4 self-end h-fit'>
                    <div className='absolute top-0 translate-y-[-50%] w-[50px] h-[50px] bg-Purple-950 rounded-full p-3.5 flex items-center justify-center'>
                        <Image src={Fully} alt="Fully Customizable" width={0} height={0} className='w-[100%] h-[100%]' />
                    </div>
                    <div className='flex flex-col gap-2 mt-6'>
                        <h3 className='font-bold text-lg'>Fully Customizable</h3>
                        <p className='text-Gray-500'>
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
