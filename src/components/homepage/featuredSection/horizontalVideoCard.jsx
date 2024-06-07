import playButton from './assets/play.svg'
import transparentButton from './assets/transparent-button.svg'

export default function HorizontalVideoCard({ data }) {
    return (
        <div className='flex gap-[26px]'>
            {Object.keys(data).map((column, index) => (
                <div key={index}>
                    <div className="relative">
                        <img src={data[column].Main} className="rounded-lg "/>
                        <div className="absolute rounded-full bg-gray/[0.1] px-[20px] py-[10px] m-3 flex items-center gap-[12px] bottom-0">
                            <img src={playButton} />
                            <div className="text-dark-textPrimary">{data[column].Time}</div>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-h5 text-dark-textPrimary">{data[column].Title}</h5>
                        <p className="text-light-yellow text-p">Watch now</p>
                    </div>
                </div>
            ))}
        </div>
    )
}