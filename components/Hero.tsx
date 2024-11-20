import React from 'react'
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/tailwindcss-buttons';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight
                    className='-top-20 -left-10 md:-left-32 md:-top-16 h-[75vh] transition-all duration-1000 ease-in-out opacity-0 hover:opacity-100'
                    fill='cyan'
                />
                <Spotlight
                    className='top-20 left-1/3 h-[70vh] w-[45vw] transition-all duration-1000 ease-in-out opacity-0 hover:opacity-100'
                    fill='purple'
                />
                <Spotlight
                    className='top-40 left-2/3 h-[70vh] w-[45vw] transition-all duration-1000 ease-in-out opacity-0 hover:opacity-100'
                    fill='coral'
                />

            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Welcome to my digital space, where passion meets innovation—let's create something extraordinary together.</h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Transforming Concepts into Seamless User Experiences' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Shashwat Tewari, a ReactJS/NextJS developer based in India
                    </p>
                    <a href="https://drive.google.com/file/d/1VX8PS_--ZWVC7Fa7h_fpLeBwjbGF5uXk/view?usp=sharing" target='_blank'><MagicButton
                        title="See my Resume"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;