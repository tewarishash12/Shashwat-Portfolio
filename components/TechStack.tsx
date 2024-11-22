import React from 'react'
import { techstack } from '@/data';
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const TechStack = () => {
    return (
        <section className='py-20' id='techstack'>
            <h1 className='heading'>
                My Current {' '}
                <span className='text-red-600'>Technological Stack</span>
            </h1>
            <div className='flex flex-col items-center max-lg:mt-10'>
                <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased relative overflow-hidden '>
                    <div className='flex flex-col items-center max-lg:mt-10'>
                        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased relative overflow-hidden '>
                            <InfiniteMovingCards
                                items={techstack}
                                direction="right"
                                speed="fast"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack