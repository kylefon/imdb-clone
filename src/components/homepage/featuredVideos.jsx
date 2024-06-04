import { featuredVideosList } from './featuredImages.jsx';
import BrowseTrailerButton from './assets/browse_trailers.svg';
import VideoComponent from './videoComponent.jsx';

export default function FeaturedVideos() {
    return (
        <div className='flex flex-col items-center gap-6 relative'>
            <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                    <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                    <h5 className='text-dark-white'>Featured Videos</h5>
                </div>
                <div>
                    <button><img src={BrowseTrailerButton}/></button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {Object.keys(featuredVideosList).map((column, index) => (
                    <VideoComponent key={index} background={featuredVideosList[column].Background} main={featuredVideosList[column].Main} title={featuredVideosList[column].Title} caption={featuredVideosList[column].Caption} time={featuredVideosList[column].Time} />
                ))}
            </div>
        </div>
    )
}