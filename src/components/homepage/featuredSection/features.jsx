import FeaturedToday from './featuredToday'
import TopPicks from './topPicks'
import TopIMDBPicks from './topIMDBPicks'
import IMDbOriginals from './imdbOriginals'
import StreamingNow from './streamingNow'

export default function Features() {
    return (
        <div className='flex flex-col gap-[120px] '>
            <FeaturedToday/>
            <TopPicks />
            <TopIMDBPicks />
            <IMDbOriginals />
            <StreamingNow />
        </div> 
    )
}