import HorizontalVideoCard from "../horizontalVideoCard";
import FeaturedHeader from "../featuredHeader";
import { IMDbOriginalsList } from "../data/imdbOriginalsList";

export default function IMDbOriginals() {
    return (
        <div className="flex relative item-center justify-center mt-[100px]">
            <div className="font-roboto-condensed font-black text-header text-dark-textPrimary opacity-10 absolute -top-16 leading-none">Videos</div>
            <div className="flex flex-col gap-[30px] w-[1350px] relative">
                <FeaturedHeader text={
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex items-center gap-[10px]">
                            <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                            <h2 className="text-dark-textPrimary text-h2">IMDb Originals</h2>
                        </div>
                        <div>
                            <p className="text-dark-textSecondary text-p">Celebrity interviews, trending entertainment stories, and expert analysis</p>
                        </div>
                    </div>
                }/>
                <HorizontalVideoCard data={IMDbOriginalsList} />
            </div>
        </div>
    )
}