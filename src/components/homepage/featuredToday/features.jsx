import FeaturedToday from './featuredToday'
import TopPicks from './topPicks'

export default function Features() {
    return (
        <div className='flex flex-col gap-[120px] '>
            <FeaturedToday className='-mb-[120px]'/>
            <div className='relative flex justify-center mt-[120px]'>
                <div className="font-roboto-condensed font-black text-header text-dark-textPrimary opacity-10 absolute -top-16 leading-none">What to Watch</div>
                <TopPicks />
            </div>
        </div> 
    )
}