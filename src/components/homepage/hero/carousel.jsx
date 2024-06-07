import { useState } from "react";
import CarouselComponent from './carouselComponent';
import FeaturedVideos from './featuredVideos'
import BackgroundColor from "./backgroundColor";

export default function Carousel() {
    const [dominantColor, setDominantColor] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div className="relative">
            <div className='flex justify-center gap-6 items-start p-[50px] pb-[160px]'>
                <CarouselComponent setDominantColor={setDominantColor} setSlideIndex={setSlideIndex}/>
                <FeaturedVideos />
            </div>
            <BackgroundColor  dominantColor={dominantColor} slideIndex={slideIndex} />
        </div>
    )
}
