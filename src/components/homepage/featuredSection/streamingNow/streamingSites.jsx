import { useState } from "react";

export default function StreamingSites() {
    
    const streamingSitesList = ['Prime Video', 'Disney+', 'Hulu', 'Netflix', 'HBO Max'];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const slideBg = (index) => {
        setSelectedIndex(index);
    };

  return (
    <div className="relative flex justify-center items-center text-center w-full sm:w-[650px] h-16 bg-gray/[0.1] rounded-lg p-2">
      <div className="relative flex w-full h-full items-center">
        <div
          className="absolute top-0 w-[20%] h-full bg-light-yellow transition-all duration-300 text-black flex items-center justify-center rounded-lg"
          style={{ transform: `translateX(${selectedIndex * 100}%)`}}
        >
            <div className="transition-opacity ease-in-out duration-300 opacity-100">
                {streamingSitesList[selectedIndex]}
            </div>
        </div>
        {streamingSitesList.map((site, index) => (
          <button
            key={index}
            onClick={() => slideBg(index)}
            className="relative z-10 flex-1 h-full flex items-center justify-center border-none bg-transparent text-dark-textPrimary cursor-pointer"
          >
            <div className="transition-opacity ease-in-out duration-300 opacity-100">
                {selectedIndex !== index && site }
            </div>
           </button>
        ))}
      </div>
    </div>
  );
}