import { menuItems } from './data/menuItems';
import { menuImages } from './data/menuImages'; 
import { itemImages } from './data/itemImages';
import { useState } from 'react';


export default function SideoutMenu() {
    const [isClicked, setIsClicked] = useState(false);
    const [menuClicked, setMenuClicked] = useState(null);   

    const handleOnClick = (menu) => {
        if (menuClicked === menu) {
            setIsClicked(false);
            setMenuClicked(null);
        } else {
            setIsClicked(!isClicked);
            setMenuClicked(menu);
        }
    }

    return (
        <div  className='z-50 absolute w-[280px] h-screen bg-dark-bgNav overflow-scroll'>
            {Object.keys(menuItems).map((menu, index) => (
                <div key={index} className='flex flex-col p-4'>
                    <button className='gap-3 flex items-center justify-between' onClick={() => handleOnClick(menu)}>
                        <div className='flex gap-3'>
                            <img src={menuImages[menu]} className='w-[18px]'/>
                            <p className={menuClicked === menu ? 'text-h5 text-light-yellow' : 'text-h5 text-dark-textPrimary'}>{menu}</p>
                        </div>
                        <img src={itemImages.Dropdown} 
                        className={menuClicked === menu ? 'rotate-180' : ''}
                        />
                    </button>
                    {menuClicked === menu ? 
                    (<div className='flex flex-col text-dark-textPrimary p-2'>
                        {menuItems[menu].map((item, index) => 
                            <div key={index}>
                                {item.map((items, idx) => (
                                    <div key={idx} className='py-2'>
                                        {items}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>) : "" }
                </div>                  
            ))}
        </div>
    )
}