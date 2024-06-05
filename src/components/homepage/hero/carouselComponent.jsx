import playButton from './assets/transparent_play.svg';
import bookmark from './assets/bookmark.svg';
import rightButton from './assets/right-carousel.svg';
import leftButton from './assets/left-carousel.svg';
import lowRightButton from './assets/right-carousel-lowOpacity.svg';
import lowLeftButton from './assets/left-carousel-lowOpacity.svg';
import { featuredVideosList } from './data/featuredImages.jsx';
import { useEffect, useRef, useState } from 'react';

export default function CarouselComponent() {
    const [slide, setSlide] = useState(0);
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const [dominantColors, setDominantColors] = useState([]);

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
    Object.values(featuredVideosList).forEach((image, index) => {
      getDominantColor(image.Background, (color) => {
        setDominantColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[index] = color;
          return newColors;
        });
      });
    });
  }, []);
    
 
    return (
        <div className='relative '>
            {Object.keys(featuredVideosList).map((column, index) => (
                <div key={index} className={slide === index ? carouselStyle : `${carouselStyle} hidden`}>
                    <img src={featuredVideosList[column].Background} className='text-dark-textPrimary rounded-lg' />
                    {dominantColors[index] && (
                        <div style={{ backgroundColor: dominantColors[index] }}></div>
                    )}
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