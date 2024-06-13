import playButton from './assets/play.svg'

export default function HorizontalVideoCard({ data }) {
    return (
        <div className='flex gap-[26px] items-start overflow-x-auto whitespace-nowrap'>
            {Object.keys(data).map((column, index) => (
                <div key={index} className='min-w-[30vh]'>
                    <div className="relative">
                        <img src={data[column].Main} className="rounded-lg w-full"/>
                        <div className="absolute rounded-full bg-gray/[0.1] px-[20px] py-[10px] m-3 flex items-center gap-[12px] bottom-0">
                            <img src={playButton} />
                            <div className="text-dark-textPrimary">{data[column].Time}</div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h5 className="text-h5 text-dark-textPrimary whitespace-normal">{data[column].Title}</h5>
                        <p className="text-light-yellow text-p">Watch now</p>
                    </div>
                </div>
            ))}
        </div>
    )
}