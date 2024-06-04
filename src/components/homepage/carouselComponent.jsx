import playButton from './assets/transparent_play.svg';
import bookmark from './assets/bookmark.svg';
import rightButton from './assets/right-carousel.svg';
import leftButton from './assets/left-carousel.svg';
import { featuredVideosList } from './featuredImages.jsx';
import { useEffect, useRef, useState } from 'react';

export default function CarouselComponent() {
    const [slide, setSlide] = useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setSlide(slide === Object.keys(featuredVideosList).length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? Object.keys(featuredVideosList).length - 1 : slide - 1);
    }

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, 5500);

        return () => clearTimeout(timeoutRef.current);
    }, [slide])

   let carouselStyle = 'relative text-dark-textPrimary';
   let indicatorStyle = 'h-3.5 w-3.5 rounded-full bg-gray';
 
    return (
        <div className='relative '>
            {Object.keys(featuredVideosList).map((column, index) => (
                <div key={index} className={slide === index ? carouselStyle : `${carouselStyle} hidden`}>
                    <img src={featuredVideosList[column].Background} className='text-dark-textPrimary bg-cover bg-center rounded-lg' />
                    <div className='absolute left-6 top-[264px] flex items-end gap-[30px]'>
                        <img src={featuredVideosList[column].Main} alt='Poster' className='rounded-lg relative'/>
                        <img className='absolute top-0 px-3' src={bookmark} />
                        <div className='flex items-center gap-[23px]'>
                            <img src={playButton} alt='Play Button' className='h-[143px]' />
                            <div>
                                <h1 className='text-h1'>{featuredVideosList[column].Title}</h1>
                                <h2 className='text-h2 text-gray opacity-40'>{featuredVideosList[column].Caption}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex absolute gap-7 px-7 bottom-7 right-0 items-center'>
                <div className='flex gap-[13px]'>
                    {Object.keys(featuredVideosList).map((indicator, indicatorIndex) => (
                        <div key={indicatorIndex} className={slide === indicatorIndex ? `${indicatorStyle} opacity-90` : `${indicatorStyle} opacity-40` }></div>
                    ))} 
                </div>
                <div className='flex gap-[5px]'>
                    <button onClick={prevSlide}><img src={leftButton} alt='Left Button' /></button>
                    <button onClick={nextSlide}><img src={rightButton} alt='Right Button'/></button>
                </div>
            </div>
        </div>
    )
}