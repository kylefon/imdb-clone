import { featuredVideosList } from './featuredImages.jsx';
import CarouselComponent from './carouselComponent';

export default function Carousel() {
    return (
    <div>
        {Object.keys(featuredVideosList).map((column, index) => (
            <CarouselComponent key={index} background={featuredVideosList[column].Background} main={featuredVideosList[column].Main} title={featuredVideosList[column].Title} caption={featuredVideosList[column].Caption}/>
        ))}
    </div>
    )
}