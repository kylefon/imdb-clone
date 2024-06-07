import { menuItems } from './data/menuItems';
import { menuImages } from './data/menuImages'; 

export default function MenuDropDown({ currentMenu }) {
    return (
        <div className='z-50 absolute -translate-y-1 w-full bg-dark-bgNav flex justify-center'>
            <div className='max-w-[1350px] w-full flex py-12 h-80 text-dark-textPrimary justify-between'>
                <div className='flex gap-28'>
                    {menuItems[currentMenu].map((column, index) => (
                    <div key={index} className='leading-loose'>
                        {column.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                    ))}
                </div>
                <div>
                    {menuImages[currentMenu] && 
                    <img src={menuImages[currentMenu]} className="h-56 w-56"/>
                    }
                </div>
            </div>
        </div>
    )
}
