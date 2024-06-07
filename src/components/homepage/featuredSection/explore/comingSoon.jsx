import ComingSoonCard from "../comingSoonCard";
import { comingSoonList } from "../data/comingSoonList";
import rightArrow from '../assets/arrow-right.svg'
import FeaturedHeader from "../featuredHeader";

 export default function ComingSoon() {
    return (
        <div className="flex relative item-center justify-center">
            <div className="flex flex-col gap-[30px] w-[1350px] relative">
                <FeaturedHeader text = {
                <div>
                    <div className="flex items-center gap-[10px]">
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Coming soon to theaters</h2>
                        <img src={rightArrow} />
                    </div>
                    <div>
                        <p className="text-dark-textSecondary text-p">Trailers for Upcoming Releases</p>
                    </div>
                </div>} 
                />
                <ComingSoonCard data={comingSoonList} />
            </div>
        </div>
    )
 }