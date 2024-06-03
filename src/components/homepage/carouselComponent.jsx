import playButton from './assets/transparent_play.svg';
import rightButton from './assets/right-carousel.svg';
import leftButton from './assets/left-carousel.svg';

export default function CarouselComponent({background, main, title, caption}) {
    return (
        <div className='relative text-dark-textPrimary'>
            <div className='relative text-dark-textPrimary bg-cover bg-center h-[631px] w-[1040px] py-10 rounded-lg'
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%), url(${background})`}}>
                <div className=''>
                </div>
                <div className='flex absolute bottom-0 right-0 py-10 px-6 gap-[5px]'>
                    <img src={leftButton} alt='Left Button' />
                    <img src={rightButton} alt='Right Button'/>
                </div>
            </div>
            <div className='absolute left-6 top-[328px] flex items-end gap-[30px]'>
                <img src={main} alt='Poster' className='rounded-lg'/>
                <div className='flex items-center gap-[23px]'>
                    <img src={playButton} alt='Play Button'className='h-[143px]'/>
                    <div>
                        <h1>{title}</h1>
                        <h2>{caption}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}