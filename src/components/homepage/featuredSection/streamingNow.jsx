import HorizontalVideoCard from "./horizontalVideoCard";
import FeaturedHeader from "./featuredHeader";
import { IMDbOriginalsList } from "./data/imdbOriginalsList";
import StreamingSites from "./streamingSites";

export default function StreamingNow() {
    return (
        <div className="flex relative item-center justify-center mt-[200px]">
            <div className="font-roboto-condensed font-black text-[220px] absolute text-dark-textPrimary opacity-10 -translate-y-[200px] leading-none">Streaming Now</div>
            <div className="flex flex-col gap-[30px] w-[1350px] relative">
                <FeaturedHeader text={
                    <StreamingSites />
                }/>
            </div>
        </div>
    )
}