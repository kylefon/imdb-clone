import yellowStar from './assets/yellow-star.svg'
import hollowStar from './assets/hollow-star.svg'
import infoVector from './assets/info-vector.svg'
import bookmark from './assets/bookmark.svg'

export default function ExploreCard({ data }) {
    return (
        <div className='grid grid-cols-3 gap-[26px]'>
            {Object.keys(data).map((column, index) => (
                <div key={index} className="flex gap-[19px] p-[20px] bg-dark-card rounded-lg">
                    <div className="flex gap-[10px]">
                        <h2 className='text-dark-textPrimary text-h2'>{index+1}</h2>
                        <div className="h-[40px] w-[4px] rounded-full bg-light-yellow"></div>
                    </div>
                    <div className="relative">
                        <img src={bookmark} className="absolute top-0 px-2"/>
                        <img src={data[column].Main} className='w-[126px]'/> 
                    </div>
                    <div className='flex text-dark-textPrimary flex-col gap-[14px] w-[204px]'>
                        <h5 className='text-h5 font-bold'>{data[column].Title}</h5>
                        <h3 className='text-h3'>{data[column].BoxOffice}</h3>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <img src={yellowStar} />
                                <h5 className='text-h5'>{data[column].Stars}</h5>
                            </div>
                            <div className="flex gap-2">
                                <img src={hollowStar} />
                                <h5 className='text-h5'>Rate</h5>
                            </div>
                            <img src={infoVector} className="p-[9px]"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}