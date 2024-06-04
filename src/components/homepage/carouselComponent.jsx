import playButton from './assets/transparent_play.svg';
import rightButton from './assets/right-carousel.svg';
import leftButton from './assets/left-carousel.svg';
import { featuredVideosList } from './featuredImages.jsx';
import { useState } from 'react';

export default function CarouselComponent() {
    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === Object.keys(featuredVideosList).length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? Object.keys(featuredVideosList).length - 1 : slide - 1);
    }
    
   let carouselStyle = 'relative text-dark-textPrimary';
   let indicatorStyle = 'h-3.5 w-3.5 rounded-full bg-gray';
 
    return (
        <div className='relative '>
            {Object.keys(featuredVideosList).map((column, index) => (
                <div key={index} className={slide === index ? carouselStyle : `${carouselStyle} hidden`}>
                    <img src={featuredVideosList[column].Background} className='text-dark-textPrimary bg-cover bg-center rounded-lg' />
                    <div className='absolute left-6 top-[264px] flex items-end gap-[30px]'>
                        <img src={featuredVideosList[column].Main} alt='Poster' className='rounded-lg'/>
                        <div className='flex items-center gap-[23px]'>
                            <img src={playButton} alt='Play Button' className='h-[143px]' />
                            <div>
                                <h1 className='text-h2'>{featuredVideosList[column].Title}</h1>
                                <h2 className='text-h3 text-gray'>{featuredVideosList[column].Caption}</h2>
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