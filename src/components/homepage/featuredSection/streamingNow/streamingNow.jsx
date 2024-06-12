import FeaturedHeader from "../featuredHeader";
import StreamingSites from "./streamingSites";
import VerticalTitleCardNoTrailer from "../verticalTitleCardNoTrailer";
import { topPicks } from "../data/topPicks";

export default function StreamingNow() {
    return (
        <div className="flex relative item-center justify-center mt-[200px] w-full">
            <div className="font-roboto-condensed font-black absolute text-dark-textPrimary text-center opacity-10 -translate-y-[100px] lg:-translate-y-[200px] leading-none w-full text-[70px] xs:text-[15vw] lg:text-[205px]">Streaming Now</div>
            <div className="flex flex-col gap-[30px] w-full relative">
                <FeaturedHeader text={
                    <StreamingSites />
                }/>
                <div className="overflow-x-auto w-full">
                    <VerticalTitleCardNoTrailer data={topPicks} />
                </div>
            </div>
        </div>
    )
}