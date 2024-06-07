import React, {useState} from "react";


export default function TestSlide() {
    const [isHovered, setIsHovered] = useState(false)
    let one = 'float-left text-light-textPrimary duration-100'
    let two = "float-right text-light-textPrimary"
    let group = "w-[340px] h-[40px] p-5 relative z-1 mt-[100px]"
    let bg = 'bg-[#e67e22] h-[60px] w-[190px] absolute top-0 -ml-[260px] -z-1 duration-100 radius-md'

    return (
        <div className="bg-dark-textPrimary">
        <div className={group}>
            <div className="relative">
                <button className={two} onClick={() => setIsHovered(true)} >
                    <div className="p-[10px] duration-200">I AM COOL TOO</div>
                    <div className={isHovered ? `${bg} w-[200px] -ml-[40px] text-dark-textPrimary` : `${bg}` }></div>
                </button>
                <a href="#" onClick={() => setIsHovered(false)} className={isHovered ? `${one} text-dark-textPrimary` : `${one}` }>I AM COOL</a>
            </div>

        </div>
        </div>
    )
}