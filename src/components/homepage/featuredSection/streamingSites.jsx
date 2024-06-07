import { useState } from "react";

export default function StreamingSites() {
    
    const streamingSitesList = ['Prime Video', 'Disney+', 'Hulu', 'Netflix', 'HBO Max'];
    const [selectedSite, setSelectedSite] = useState('Prime Video');
    const selectedIndex = streamingSitesList.findIndex(site => site === selectedSite);

    let buttonStyle = 'rounded-lg absolute bg-light-yellow w-[128px] h-[46px] text-light-textPrimary flex items-center justify-center z-10 transform ease-in-out duration-300';

    const handleButtonClick = (buttonClicked) => {
        setSelectedSite(buttonClicked);
    };

    const getTranslateX = (index) => {
        return 128 * index;
    };

    return (
        <div className="relative">
            <div className='flex rounded-lg h-[63px] w-[656px] bg-gray/[0.1] p-[8px] top-0'>
                <div className={`${buttonStyle}`} style={{ transform: `translateX(${getTranslateX(selectedIndex)}px)` }}>
                    {streamingSitesList[selectedIndex]}
                </div>
            </div>
            <div className="flex absolute rounded-lg h-[63px] w-[656px] bg-gray/[0] px-[31px] py-[21px] rounded-lg justify-between text-dark-textPrimary top-0 z-0">
                {streamingSitesList.map((column, index) => (
                    <div key={index} className="">
                        <button onClick={() => handleButtonClick(column)} className={selectedSite === column ? 'none' : ""}>
                            {column}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
