export default function HorizontalNewsCard({ data }) {
    return (
        <div className="grid grid-cols-3 gap-[20px]">
            {Object.keys(data).map((column, index) => (
                <div key={index} className="flex bg-gray/[0.05] gap-[14px] p-[20px] rounded-lg">
                    <img src={data[column].Image} className="rounded-lg w-[180px]"/>
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="text-h3 text-dark-textPrimary">{data[column].Title}</h3>
                            <div className="flex gap-2 items-center">
                                <p className="text-p text-dark-textPrimary">{data[column].Date}</p>
                                <div className="h-[3px] w-[3px] rounded-full bg-dark-textPrimary"></div>
                                <p className="text-p text-dark-textPrimary">{data[column].Username}</p>
                            </div>
                        </div>
                        <p className="text-p text-light-yellow">{data[column].ExtraInfo}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}