'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./grid-globe";
import { useState } from "react";
import animationData from '@/data/confetti.json'

import Lottie from "react-lottie";
import MagicButton from "./tailwindcss-buttons";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    let [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('tewarishashwat2002@gmail.com');
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 5000);
    }

    return (
        <div className={cn("row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex-col flex justify-between space-y-4 border border-white/[0.2] ", className)}
            style={{
                background: 'rgb(5, 15, 30)', backgroundColor: 'linear-gradient(90deg, rgba(93,108,111,1) 12%, rgba(121,196,212,1) 65%, rgba(252,176,69,1) 100%)'
            }}>
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className={'object-cover, object-center h-full w-full'} />
                    )}
                </div>

                <div className={cn('group-hover/bento:translate-x-2 transition duration-200 relative h-full min-h-40 flex flex-col px-5 p-5 lg:p-10', titleClassName)}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl min-w-96 z-10">
                        {title}
                    </div>
                    {id === 2 && (<GlobeDemo />)}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                                {['ReactJS', 'NextJS', 'Tailwind'].map((item) => (
                                    <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                                ))}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                {['NodeJS', 'ExpressJS', 'Mongo'].map((item) => (
                                    <span key={item} className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                                ))}

                            </div>
                        </div>
                    )}
                    {id===6 && (
                        <BackgroundGradientAnimation/>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative ">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }} />
                            </div>
                            <MagicButton
                                title={copied ? 'email copied' : 'Copy my email to connect'}
                                icon={<IoCopyOutline />}
                                position='right'
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
