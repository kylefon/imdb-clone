import FeaturedTodayCard from "./featuredTodayCard";
import FeaturedHeader from "./featuredHeader";

export default function FeaturedToday() {
    return (
        <div className="flex item-center justify-center">
            <div className="flex flex-col gap-[30px] w-[1350px] ">
                <FeaturedHeader text={
                    <>
                        <div className='h-1.5 w-1.5 rounded-full bg-light-yellow'></div>
                        <h2 className="text-dark-textPrimary text-h2">Featured Today</h2>
                    </>
                }/>
                <FeaturedTodayCard />
            </div>
        </div>
    )
}