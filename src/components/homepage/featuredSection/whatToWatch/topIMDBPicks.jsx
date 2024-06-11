import FeaturedTodayCard from "../featuredTodayCard";
import FeaturedHeader from "../featuredHeader";
import rightArrow from '../assets/arrow-right.svg'
import VerticalTitleCard from "../verticalTitleCard";
import { topPicks } from '../data/topPicks'


export default function TopIMDBPicks() {
    return (
        <div className="flex relative item-center justify-center w-full">
            <div className="flex flex-col gap-[30px] w-full relative">
                <FeaturedHeader text={
                    <div className="flex items-center gap-[10px]">
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Top on IMDb this week</h2>
                    </div>
                }/>
                <div className="overflow-x-hidden w-full">
                    <VerticalTitleCard data={topPicks} />
                </div>
            </div>
        </div>
    )
}