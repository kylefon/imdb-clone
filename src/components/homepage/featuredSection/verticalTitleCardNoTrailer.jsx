import bookmark from './assets/bookmark.svg'
import yellowStar from './assets/yellow-star.svg'
import hollowStar from './assets/hollow-star.svg'
import infoVector from './assets/info-vector.svg'

export default function VerticalTitleCardNoTrailer({ data }) {
    return (
        <div className='flex text-dark-textPrimary gap-[20px] items-center overflow-x-auto whitespace-nowrap'>
            {Object.keys(data).map((column, index) => 
                <div key={index} className='bg-gray/[0.1] p-3 rounded-lg flex flex-col gap-[17px] min-w-[200px]'>
                    <div className='flex relative gap-[17px]'>
                        <img src={data[column].Poster} className='rounded-lg'/>
                        <img src={bookmark} className='absolute top-0 px-5' />
                    </div>
                    <div className='flex flex-col gap-[17px]'>
                        <h3 className='text-h3 truncate w-full'>{data[column].Title}</h3>
                        <div className='flex gap-[22px] justify-start'>
                            <div className='flex gap-[20px]'>
                                <div className='flex gap-[5px] items-center'>
                                    <img src={yellowStar} />
                                    <h5 className='text-h5'>{data[column].Stars}</h5>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='flex gap-[5px]'>
                                        <img src={hollowStar} />
                                        <h5 className='text-h5 hidden lg:block'>Rate</h5>
                                    </div>
                                    <img src={infoVector} className='h-[24px]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}