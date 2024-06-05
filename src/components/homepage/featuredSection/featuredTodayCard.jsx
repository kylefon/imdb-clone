import {featuredTodayList} from './data/featuredTodayList'

export default function FeaturedTodayCard() {
    return (
        <div className='flex gap-[26px] items-center justify-center'>
            {Object.keys(featuredTodayList).map((column, index) => (
                <div key={index}>
                    <div className="relative">
                        <img src={featuredTodayList[column].Photo}  className="rounded-lg"/>
                        <button className="absolute bottom-0 px-[13px] py-[18px]"><img src={featuredTodayList[column].Button}/></button>
                    </div>
                    <div >
                        <p className="text-dark-textPrimary">{featuredTodayList[column].Title}</p>
                        <p className="text-light-yellow">{featuredTodayList[column].Caption}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}