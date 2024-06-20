import { useState } from "react"
import leftButton from "./assets/left-carousel.svg";
import lowOPLeftButton from "./assets/left-carousel-lowOpacity.svg"
import rightButton from "./assets/right-carousel.svg"
import lowOPRightButton from "./assets/right-carousel-lowOpacity.svg"

import { useFetchTrendingDay } from "./useFetchTrendingDay";


export default function FeaturedHeader({ text, videoIndex, setVideoIndex, trendingDay }) {
    const [hoverLeftButton, setHoverLeftButton] = useState(false);
    const [hoverRightButton, setHoverRightButton] = useState(false);
 

    const pressRightArrow = () => {
        if (videoIndex + 6 < trendingDay.length) {
            setVideoIndex(prevIndex => prevIndex + 6);
        }
    };

    const pressLeftArrow = () => {
        if (videoIndex - 6 >= 0) {
            setVideoIndex(prevIndex => prevIndex - 6);
        } else {
            setVideoIndex(0);
        }
    };

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center w-full">
            <>
                {text}
            </>
            </div>
            <div className="hidden lg:flex gap-[5px]">
                <button onMouseEnter={() => setHoverLeftButton(true)} onMouseLeave={() => setHoverLeftButton(false)} onClick={pressLeftArrow}>
                    {hoverLeftButton ? 
                        <img src={leftButton} /> :
                        <img src={lowOPLeftButton}/>
                    }
                </button>
                <button onMouseEnter={() => setHoverRightButton(true)} onMouseLeave={() => setHoverRightButton(false)} onClick={pressRightArrow}>
                    {hoverRightButton ? 
                        <img src={rightButton}/> :
                        <img src={lowOPRightButton} />
                    }
                </button>
            </div>
        </div>
    )
}