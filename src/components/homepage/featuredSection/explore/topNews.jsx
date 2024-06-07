import rightArrow from '../assets/arrow-right.svg'
import FeaturedHeader from "../featuredHeader";
import { topNewsList } from "../data/topNewsList";
import HorizontalNewsCard from '../horizontalNewsCard';

 export default function TopNews() {
    return (
        <div className="flex relative item-center justify-center">
            <div className="flex flex-col gap-[30px] w-[1350px] relative">
                <FeaturedHeader text = {
                <div>
                    <div className="flex items-center gap-[10px]">
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Top News</h2>
                        <img src={rightArrow} />
                    </div>
                </div>} 
                />
                <HorizontalNewsCard data={topNewsList} />
            </div>
        </div>
    )
 }