import FeaturedHeader from "../featuredHeader";
import rightArrow from '../assets/arrow-right.svg'
import VerticalTitleCard from "../verticalTitleCard";
import { topPicks } from '../data/topPicks'


export default function TopPicks() {
    
    return (
        <div className="flex relative item-center justify-center mt-[100px] w-full">
            <div className="font-roboto-condensed font-black text-dark-textPrimary opacity-10 absolute -top-16 leading-none w-full flex text-center text-[90px] md:text-[15vw] lg:text-[220px] flex justify-center">What to Watch</div>
            <div className="flex flex-col gap-[30px] w-full relative">
                <FeaturedHeader text={
                    <div>
                        <div className="flex items-center gap-[10px]">
                            <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                            <h2 className="text-dark-textPrimary text-h2">Top Picks</h2>
                            <img src={rightArrow} />
                        </div>
                        <div>
                            <p className="text-dark-textSecondary text-p">TV shows and movies just for you</p>
                        </div>
                    </div>
                }/>
                <div className="overflow-x-hidden w-full">
                    <VerticalTitleCard data={topPicks} />
                </div>
            </div>
        </div>
    )
}