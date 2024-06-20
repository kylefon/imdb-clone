import FeaturedHeader from "../featuredHeader";
import rightArrow from '../assets/arrow-right.svg'
import VerticalTitleCard from "../verticalTitleCard";
import { useFetchTrendingDay } from "../useFetchTrendingDay";
import { useState } from "react";


export default function TopPicks() {
    const {trendingDayData: trendingDay} = useFetchTrendingDay();

    const [videoIndex, setVideoIndex] = useState(0);
    
    return (
        <div className="flex relative item-center justify-center mt-[100px] w-full">
            <div className="font-roboto-condensed font-black text-dark-textPrimary opacity-10 absolute -top-16 leading-none w-full flex text-center text-[90px] md:text-[15vw] lg:text-[220px] flex justify-center">What to Watch</div>
            <div className="flex flex-col gap-[30px] w-full relative">
                <FeaturedHeader 
                    videoIndex={videoIndex}
                    setVideoIndex={setVideoIndex}
                    data={trendingDay}
                    text={
                        <div>
                            <div className="flex items-center gap-[10px]">
                                <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                                <h2 className="text-dark-textPrimary text-h2">Top Picks</h2>
                                <img src={rightArrow}/>
                            </div>
                            <div>
                                <p className="text-dark-textSecondary text-p">TV shows and movies just for you</p>
                            </div>
                        </div> }
                />
                <div className="hidden lg:grid lg:grid-cols-6 lg:gap-[20px] w-full">
                    {Object.keys(trendingDay).slice(videoIndex, videoIndex+6).map((image, index) => (
                        <VerticalTitleCard 
                            key={index}
                            poster={`https://image.tmdb.org/t/p/original${trendingDay[image].poster_path}`} 
                            title={trendingDay[image].title || trendingDay[image].name} 
                            stars={ parseFloat(trendingDay[image].vote_average).toFixed(1) }
                        />
                    ))}
                </div>
                <div className="overflow-x-auto whitespace-nowrap w-full lg:hidden">
                <div className="flex gap-[20px]">
                    {Object.keys(trendingDay).map((image, index) => (
                        <VerticalTitleCard
                            key={index}
                            poster={`https://image.tmdb.org/t/p/original${trendingDay[image].poster_path}`}
                            title={trendingDay[image].title || trendingDay[image].name}
                            stars={parseFloat(trendingDay[image].vote_average).toFixed(1)}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}