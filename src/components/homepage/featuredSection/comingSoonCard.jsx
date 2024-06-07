import playButton from './assets/play.svg'
import bookmark from './assets/bookmark.svg'
import calendarIcon from './assets/calendar-icon.svg'

export default function ComingSoonCard({ data }) {
    return (
        <div className='flex gap-[26px]'>
            {Object.keys(data).map((column, index) => (
                <div key={index} className='flex flex-col gap-[10px]'>
                    <div className="relative">
                        <img src={data[column].Main} className="rounded-lg w-[342px]"/>
                        <div className="absolute rounded-full bg-gray/[0.1] px-[20px] py-[10px] m-3 flex items-center gap-[12px] bottom-0">
                            <img src={playButton}/>
                            <div className="text-dark-textPrimary">{data[column].Time}</div>
                        </div>
                        <img src={bookmark} className='absolute top-0 px-3'/>
                    </div>
                    <div>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='flex gap-2'>
                                <img src={calendarIcon} />
                                <p className='text-p text-dark-textSecondary'>{data[column].Date}</p>
                            </div>
                            <p>{data[column].Name}</p>
                        </div>
                        <p className="text-dark-textPrimary text-p">{data[column].Title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

