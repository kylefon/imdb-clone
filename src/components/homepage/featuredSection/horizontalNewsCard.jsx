export default function HorizontalNewsCard({ data }) {
    return (
        <div className="flex gap-[20px] items-start overflow-x-auto whitespace-nowrap">
            {Object.keys(data).map((column, index) => (
                <div key={index} className="w-[256px] sm:w-full">
                    <div className="flex bg-gray/[0.05] gap-[14px] p-[20px] rounded-lg w-full h-[200px]">
                        <div className="w-[90px]">
                            <img src={data[column].Image} className="rounded-lg w-full"/>
                        </div>
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex flex-col gap-[10px]">
                                <h3 className="text-h3 text-dark-textPrimary whitespace-normal line-clamp-4">{data[column].Title}</h3>
                                <div className="flex gap-2 items-center">
                                    <p className="text-p text-dark-textPrimary">{data[column].Date}</p>
                                    <div className="h-[3px] w-[3px] rounded-full bg-dark-textPrimary"></div>
                                    <p className="text-p text-dark-textPrimary">{data[column].Username}</p>
                                </div>
                            </div>
                            <p className="text-p text-light-yellow">{data[column].ExtraInfo}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}