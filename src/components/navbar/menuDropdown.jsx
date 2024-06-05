import { menuItems } from './data/menuItems';
import { menuImages } from './data/menuImages'; 

export default function MenuDropDown({ currentMenu }) {
    return (
        <>
            <div className='z-1000 absolute w-screen flex p-12 bg-dark-bgNav px-50 h-80 text-dark-textPrimary justify-between'>
                <div className='flex gap-28'>
                    {menuItems[currentMenu].map((column, index) => (
                    <div key={index} className='leading-loose'>
                        {column.map((item, i) => (
                            <p keys={i}>{item}</p>
                        ))}
                    </div>
                    ))}
                </div>
                {menuImages[currentMenu] && 
                <img src={menuImages[currentMenu]} className="h-56 w-56"/>
                }
            </div>
        </>
    )
}