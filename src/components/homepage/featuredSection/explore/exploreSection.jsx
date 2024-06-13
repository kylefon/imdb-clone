import FeaturedHeader from "../featuredHeader";
import rightArrow from '../assets/arrow-right.svg'
import { exploreList } from "../data/exploreList";
import ExploreCard from "../exploreCard";

export default function ExploreSection() {
    return (
        <div className="flex relative item-center justify-center mt-[100px]">
            <div className="font-roboto-condensed text-responsive font-black text-dark-textPrimary opacity-10 absolute -translate-y-[100px] leading-none">Explore</div>
            <div className="flex flex-col gap-[30px] w-[1350px] relative">
                <div>
                    <div className="flex items-center gap-[10px]">
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Top box office (US)</h2>
                        <img src={rightArrow} />
                    </div>
                    <div>
                        <p className="text-dark-textSecondary text-p">Weekend of May 31-June 2</p>
                    </div>
                </div>
                <ExploreCard data={exploreList} />
            </div>
        </div>
    )
}