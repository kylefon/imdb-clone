import LiamNeeson from './assets/liamNeeson.jpg'

export default function BornCelebrityCard() {

    const data = {
        1: {
            Image: LiamNeeson,
            Name: 'Liam Neeson',
            Age: '72'
        }
    }

    return (
        <>
            {Object.keys(data).map((column, index) => (
                <div key={index} className='flex flex-col gap-[12px]'>
                    <img src={data[column].Image} className='w-[181px] rounded-lg'/>
                    <div>
                        <p className="text-p text-dark-textPrimary">{data[column].Name}</p>
                        <p className="text-p text-dark-textPrimary">{data[column].Age}</p>
                    </div>
                </div>
            ))}
        </>
    )
}