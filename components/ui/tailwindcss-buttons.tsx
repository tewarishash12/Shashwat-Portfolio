import React from 'react'

const MagicButton = ({title, icon, position, handleClick, otherClasses}:{
    title: string; icon: React.ReactNode; position: string; handleClick?: ()=>void ; otherClasses?: string;
}) => {
    
    return (
        <button className="p-[4px] relative w-full overflow-hidden rounded-lg md:w-60 md:mt-10" onClick={handleClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-coral-400" />
            <div className={`flex items-center px-10 py-3 bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
                {position==='left' && icon}
                {title}
                {position==='right' && icon}
            </div>
        </button>
    )
}

export default MagicButton;