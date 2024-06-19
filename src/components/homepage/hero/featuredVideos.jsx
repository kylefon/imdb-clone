import BrowseTrailerButton from './assets/browse_trailers.svg';
import VideoComponent from './videoComponent.jsx';
import { useFetchHeroData } from './useFetchHeroData.jsx';
import { useEffect, useState } from 'react';

export default function FeaturedVideos({ slideIndex }) {
    
    const {heroData: carouselData} = useFetchHeroData();
    const [featuredVideos, setFeaturedVideos] = useState([]);

    useEffect(() => {
        const getFeaturedVideos = () => {
            const featured = [];
            for (let i = 1; i < 4; i++) {
                const index = (slideIndex + i) % carouselData.length;
                featured.push(carouselData[index]);
            }
            return featured;
        };

        if (carouselData.length > 0) {
            setFeaturedVideos(getFeaturedVideos());
        }
    }, [slideIndex, carouselData]);

    return (
        <div className='flex flex-col items-center gap-6 relative'>
            <div className='flex gap-4'>
                <div className='hidden mdlg:flex gap-2 items-center'>
                    <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                    <h5 className='text-dark-white'>Featured Videos</h5>
                </div>
                <div className='hidden mdlg:flex'>
                    <button><img src={BrowseTrailerButton}/></button>
                </div>
            </div>
            <div className='hidden mdlg:flex flex-col gap-4'>
                {featuredVideos.map((video, index) => (
                    <VideoComponent 
                        key={index} 
                        background={`https://image.tmdb.org/t/p/original${video.backdrop_path}`} 
                        main={`https://image.tmdb.org/t/p/original${video.poster_path}`} 
                        title={video.title || video.name} 
                        caption={video.overview} 
                    />
                ))}
            </div>
        </div>
    )
}