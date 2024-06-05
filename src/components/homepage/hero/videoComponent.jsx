import playButton from './assets/transparent_play.svg';

export default function VideoComponent({ background, main, title, caption, time }) {
    return ( 
        <div className='relative text-dark-textPrimary h-[183px]'>
            <div className='brightness-[0.3]'>
                <img src={background} className='rounded-xl h-[183px] w-full' />
            </div>
            <img src={main} className='absolute h-36 top-5 left-4 rounded-xl'/>
            <div className='absolute top-5 left-32 right-3'> 
                <h5 className='break-words'>{title}</h5>
                <p className='break-words'>{caption}</p>
            </div>
            <div className='flex absolute bottom-4 right-6 items-center gap-[18px]'>
                <p className='text-dark-textSecondary'>{time}</p>
                <img src={playButton} alt="play button" className=''/>
            </div>
        </div>
    );
}