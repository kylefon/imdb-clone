import bookmark from './assets/bookmark.svg'
import yellowStar from './assets/yellow-star.svg'
import hollowStar from './assets/hollow-star.svg'
import infoVector from './assets/info-vector.svg'
import trailerButton from './assets/trailer-button.svg'

export default function VerticalTitleCard({ poster, title, stars }) {
    return (
        <div className='flex text-dark-textPrimary gap-[20px] items-center w-full'>
            <div className='bg-gray/[0.1] p-3 rounded-lg flex flex-col gap-[17px] min-w-[200px]'>
                <div className='flex relative gap-[17px]'>
                    <img src={poster} className='rounded-lg w-[176px]'/>
                    <img src={bookmark} className='absolute top-0 px-5' />
                </div>
                <div className='flex flex-col gap-[17px]'>
                    <h3 className='text-h3 truncate w-[176px]'>{title}</h3>
                    <div className='flex gap-[22px] justify-start'>
                        <div className='flex gap-[20px]'>
                            <div className='flex gap-[5px] items-center'>
                                <img src={yellowStar} />
                                <h5 className='text-h5'>{stars}</h5>
                            </div>
                            <div className='flex gap-5'>
                                <div className='flex gap-[5px] items-center'>
                                    <img src={hollowStar} />
                                    <h5 className='text-h5 hidden lg:block'>Rate</h5>
                                </div>
                                <img src={infoVector} className='h-[24px]'/>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={trailerButton} />
            </div>
        </div>
    )
}