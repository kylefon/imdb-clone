import bookmark from './assets/bookmark.svg'
import yellowStar from './assets/yellow-star.svg'
import hollowStar from './assets/hollow-star.svg'
import infoVector from './assets/info-vector.svg'
import trailerButton from './assets/trailer-button.svg'

export default function VerticalTitleCard({ data }) {
    return (
        <div className='flex text-dark-textPrimary gap-[20px]'>
            {Object.keys(data).map((column, index) => 
                <div key={index} className='bg-gray/[0.1] p-3 rounded-lg flex flex-col gap-[17px]'>
                    <div className='flex relative gap-[17px]'>
                        <img src={data[column].Poster} className='rounded-lg'/>
                        <img src={bookmark} className='absolute top-0 px-5' />
                    </div>
                    <div className='flex flex-col gap-[17px]'>
                        <h3 className='text-h3'>{data[column].Title}</h3>
                        <div className='flex gap-[22px] justify-center'>
                            <div className='flex gap-[5px] items-center'>
                                <img src={yellowStar} />
                                <h5 className='text-h5'>{data[column].Stars}</h5>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex gap-[5px]'>
                                    <img src={hollowStar} />
                                    <h5 className='text-h5'>Rate</h5>
                                </div>
                                <img src={infoVector} />
                            </div>
                        </div>
                    </div>
                    <img src={trailerButton} />
                </div>
            )}
        </div>

    )
}