import playButton from './assets/transparent_play.svg';
import bookmark from './assets/bookmark.svg';
import rightButton from './assets/right-carousel.svg';
import leftButton from './assets/left-carousel.svg';
import lowRightButton from './assets/right-carousel-lowOpacity.svg';
import lowLeftButton from './assets/left-carousel-lowOpacity.svg';
import BrowseTrailerButton from './assets/browse_trailers.svg';
import { featuredVideosList } from './data/featuredImages.jsx';
import { useEffect, useRef, useState } from 'react';

export default function CarouselComponent({ setDominantColor, setSlideIndex }) {
    const [slide, setSlide] = useState(0);
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const [dominantColors, setDominantColors] = useState([]);
    const colorsFetched = useRef(false); 

    const timeoutRef = useRef(null);

    const nextSlide = () => {
        const nextSlideIndex = slide === Object.keys(featuredVideosList).length - 1 ? 0 : slide + 1;
        setSlide(nextSlideIndex);
        setSlideIndex(nextSlideIndex);
    }

    const prevSlide = () => {
        const prevSlideIndex = slide === 0 ? Object.keys(featuredVideosList).length - 1 : slide - 1;
        setSlide(prevSlideIndex);
        setSlideIndex(prevSlideIndex);
    }

    useEffect(() => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            nextSlide()
        }, 5500);

        return () => clearTimeout(timeoutRef.current);
    }, [slide])

   let carouselStyle = 'relative text-dark-textPrimary';
   let indicatorStyle = 'h-3.5 w-3.5 rounded-full bg-gray';

   const getDominantColor = (imageSrc, callback) => {
    const image = new Image();
    image.crossOrigin = "Anonymous"; 
  
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, 1, 1);
      const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;
      const color = `rgba(${r},${g},${b},${a})`;
      callback(color);
    };
  
    image.src = imageSrc;
  };

    useEffect(() => {
        if (!colorsFetched.current) { 
            Object.keys(featuredVideosList).forEach((image, index) => {
                getDominantColor(featuredVideosList[image].Background, (color) => {
                    if (!dominantColors.includes(color)) {
                        setDominantColor(prevColors => [...prevColors, color]); //for background color 
                        setDominantColors(prevColors => [...prevColors, color]); //for gradient
                    }
                });
            });
            colorsFetched.current = true; 
        }
    }, []); 
    

    return (
        <div className='relative'>
            {Object.keys(featuredVideosList).map((column, index) => (
                <div key={index} className={slide === index ? carouselStyle : `${carouselStyle} hidden`} >
                    <img src={featuredVideosList[column].Background} className='text-dark-textPrimary rounded-lg' />

                    <div className="absolute inset-0 flex flex-col justify-end">
                        <div className="w-full h-full rounded-lg" style={{ background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 28%, ${dominantColors[index]} 150%)` }}>                       
                        </div>
                    </div>

                    <div className='top-20 absolute left-6 flex items-end gap-[30px] flex flex-col justify-start top-[130px] sm:top-[264px]'>
                        <div className='flex items-end gap-[30px]'>
                            <img src={featuredVideosList[column].Main} alt='Poster' className='rounded-lg relative w-[100px] sm:w-[200px] md:w-auto'/>
                            <img className='absolute top-0 px-1 sm:px-3' src={bookmark} />
                            <div className='flex flex-col items-start sm:items-center sm:flex-row sm:gap-[23px]'>
                                <img src={playButton} alt='Play Button' className='flex flex-start h-[50px] sm:h-[120px] md:h-[143px]' />
                                <div className='gap-3'>
                                    <h1 className='text-[14px] xs:text-[18px] sm:text-h2 md:text-h1'>{featuredVideosList[column].Title}</h1>
                                    <h2 className='text-gray opacity-40 text-[12px] xs:text-[18px] sm:text-h3 md:text-h3'>{featuredVideosList[column].Caption}</h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-start w-full'>
                            <button className='flex left-0 mdlg:hidden'><img src={BrowseTrailerButton} className='h-[30px] sm:h-[40px] md:h-auto'/></button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex absolute gap-7 px-7 bottom-7 right-0 items-center'>
                <div className='hidden sm:flex gap-[13px]'>
                    {Object.keys(featuredVideosList).map((indicator, indicatorIndex) => (
                        <div key={indicatorIndex} className={slide === indicatorIndex ? `${indicatorStyle} opacity-90` : `${indicatorStyle} opacity-40` }></div>
                    ))} 
                </div>
                <div className='hidden sm:flex gap-[5px]'>
                    <button 
                        onClick={prevSlide} 
                        onMouseEnter={() => setIsLeftHovered(true)} 
                        onMouseLeave={() => setIsLeftHovered(false)}>
                            { isLeftHovered ? <img src={leftButton} alt='Left Button' /> : 
                            <img src={lowLeftButton} alt='Left Button' />
                            }
                    </button>
                    <button 
                        onClick={nextSlide} 
                        onMouseEnter={() => setIsRightHovered(true)} 
                        onMouseLeave={() => setIsRightHovered(false)}>
                            { isRightHovered ? <img src={rightButton} alt='Left Button' /> : 
                            <img src={lowRightButton} alt='Left Button' />
                            }
                    </button>
                </div>
            </div>
        </div>
    )
}