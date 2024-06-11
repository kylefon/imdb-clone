import { useState } from "react"
import leftButton from "./assets/left-carousel.svg";
import lowOPLeftButton from "./assets/left-carousel-lowOpacity.svg"
import rightButton from "./assets/right-carousel.svg"
import lowOPRightButton from "./assets/right-carousel-lowOpacity.svg"

export default function FeaturedHeader({ text }) {
    const [hoverLeftButton, setHoverLeftButton] = useState(false);
    const [hoverRightButton, setHoverRightButton] = useState(false);

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
            <>
                {text}
            </>
            </div>
            <div className="hidden lg:flex gap-[5px]">
                <button onMouseEnter={() => setHoverLeftButton(true)} onMouseLeave={() => setHoverLeftButton(false)}>
                    {hoverLeftButton ? 
                        <img src={leftButton} /> :
                        <img src={lowOPLeftButton}/>
                    }
                </button>
                <button onMouseEnter={() => setHoverRightButton(true)} onMouseLeave={() => setHoverRightButton(false)}>
                    {hoverRightButton ? 
                        <img src={rightButton}/> :
                        <img src={lowOPRightButton} />
                    }
                </button>
            </div>
        </div>
    )
}