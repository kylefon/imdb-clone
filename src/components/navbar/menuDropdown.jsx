export default function MenuDropDown({ content, image }) {
    return (
        <div className='flex p-12 bg-black px-80 h-80 text-[#c3c3c3] justify-between'>
            <div className='flex gap-28'>
                {content.map((column, index) => (
                    <div keys={index} className='leading-loose'>
                        {column.map((item, i) => (
                            <p keys={i}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
            <img src={image} className="h-56 w-56"/>
        </div>
    )
}