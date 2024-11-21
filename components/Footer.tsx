import React from 'react'
import MagicButton from './ui/tailwindcss-buttons'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'framer-motion/client'

const Footer = () => {
    return (
        <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className='heading lg:max-w-[45vw]'>
                    Unlock My <span className='text-red-600'>Digital World</span>: Let's Connect and Elevate Together
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Let&apos;s Connect: Together, We Can Turn Your Goals Into Reality
                </p>
                <a href="mailto:tewarishashwat2002@gmail.com">
                    <MagicButton
                        title="Let's Connect"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row justify-around items-center'>
                <p className='md-text-base text-md md:font-normal font-light'>Copyright © | 2024 | Shashwat Tewari</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-360 bg-opacity-75 bg-black-200 rounded-lg border-black-300 transition-all duration-300 ease-in-out hover:bg-opacity-100 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400'>
                            <a href={profile.link} target="_blank">
                                <img src={profile.img} alt={profile.name} width={30} height={30} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer