import CarouselComponent from './carouselComponent';
import FeaturedVideos from './featuredVideos'

export default function Carousel() {

    return (
        <div className='flex justify-center gap-6 items-start p-[50px] pb-[160px]'>
            <CarouselComponent />
            <FeaturedVideos />
        </div>
    )
}