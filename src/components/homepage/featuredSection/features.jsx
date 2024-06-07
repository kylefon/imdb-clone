import FeaturedToday from './featuredToday/featuredToday'
import TopPicks from './whatToWatch/topPicks'
import TopIMDBPicks from './whatToWatch/topIMDBPicks'
import IMDbOriginals from './videos/imdbOriginals'
import StreamingNow from './streamingNow/streamingNow'
import ExploreSection from './explore/exploreSection'
import ComingSoon from './explore/comingSoon'
import BornToday from './explore/bornToday'
import TopNews from './explore/topNews'

export default function Features() {
    return (
        <div className='flex flex-col gap-[120px] '>
            <FeaturedToday/>
            <TopPicks />
            <TopIMDBPicks />
            <IMDbOriginals />
            <StreamingNow />
            <ExploreSection />
            <ComingSoon />
            <BornToday />
            <TopNews />
        </div> 
    )
}