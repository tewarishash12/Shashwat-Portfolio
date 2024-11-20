import { education } from '@/data';
import React from 'react';
import { Button } from './ui/moving-border';

const Education = () => {
    return (
        <section className="py-20" id="education">
            <h1 className="heading">
                My Academic Journey: <span className="text-red-600">Education Qualification</span>
            </h1>
            <div className="w-full mt-12 grid gap-6 lg:grid-cols-1">
                {education.map((card, idx) => (
                    <Button
                        key={idx}
                        duration={Math.floor(Math.random() * 100000) + 10000}
                        borderRadius="1.75rem"
                        className="w-full flex-shrink-0 text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center p-5 gap-4">
                            <img
                                src={card.logo}
                                alt={card.institute}
                                className="w-16 h-16 object-contain rounded-full bg-white-200"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.degree}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.institute}
                                </p>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.year}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default Education;
