import FeaturedTodayCard from "../featuredTodayCard";
import FeaturedHeader from "../featuredHeader";
import rightArrow from '../assets/arrow-right.svg'
import VerticalTitleCard from "../verticalTitleCard";
import { useFetchTrendingWeek } from "../useFetchTrendingWeek";
import { useState } from "react";

export default function TopIMDBPicks() {
    const {trendingWeekData: trendingWeek} = useFetchTrendingWeek();

    const [videoIndex, setVideoIndex] = useState(0);
    
    return (
        <div className="flex relative item-center justify-center mt-[100px] w-full">
            <div className="flex flex-col gap-[30px] w-full relative">
                <FeaturedHeader
                    videoIndex={videoIndex}
                    setVideoIndex={setVideoIndex}
                    data={trendingWeek}
                    text={
                    <div className="flex items-center gap-[10px]">
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Top on IMDb this week</h2>
                    </div>}
                />
                <div className="hidden lg:grid lg:grid-cols-6 lg:gap-[20px] w-full">
                    {Object.keys(trendingWeek).slice(videoIndex, videoIndex+6).map((image, index) => (
                        <VerticalTitleCard 
                        poster={`https://image.tmdb.org/t/p/original${trendingWeek[image].poster_path}`} 
                        title={trendingWeek[image].title || trendingWeek[image].name} 
                        stars={ parseFloat(trendingWeek[image].vote_average).toFixed(1) }
                        />
                    ))}
                </div>
                <div className="overflow-x-auto whitespace-nowrap w-full lg:hidden">
                <div className="flex gap-[20px]">
                    {Object.keys(trendingWeek).map((image, index) => (
                        <VerticalTitleCard
                            key={index}
                            poster={`https://image.tmdb.org/t/p/original${trendingWeek[image].poster_path}`}
                            title={trendingWeek[image].title || trendingWeek[image].name}
                            stars={parseFloat(trendingWeek[image].vote_average).toFixed(1)}
                        />
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}