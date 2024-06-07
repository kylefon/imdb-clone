import { useState } from 'react';
import "../../index.css";
import { itemImages } from './data/itemImages';
import { menuItems } from './data/menuItems';
import MenuDropDown from './menuDropdown';
import ThemeDropDown from './themeDropdown';

export default function NavBar() {

  const [hoverMenu, setHoverMenu] = useState(null);
  const [hoverTheme, setHoverTheme] = useState(false);

  return (
    <div>
      <nav className='flex text-dark-textPrimary bg-dark-bgNav py-3 justify-center items-center'>
        <div className='flex justify-between items-center gap-6 w-[1350px]'>
          <img src={itemImages.Logo}/>
          <ul className='relative flex gap-5'>
            {Object.keys(menuItems).map((items, index) => (
             <li key = {index} className='relative text-p' onMouseEnter={() => setHoverMenu(items)} onMouseLeave={() => setHoverMenu(null)}>
                {items}
              </li>
            ))} 
          </ul>
          <div className='flex gap-4 bg-dark-bgSecondary py-1 px-5 min-w-62.5 rounded-lg'>
            <button className='flex gap-2 items-center'>All<img src={itemImages.Dropdown} /></button>
            <input className='bg-dark-bgSecondary text-dark-textSecondary pr-28' placeholder='Search IMDb'></input>
            <img src={itemImages.Search} />
          </div> 

          <button className='flex gap-2 items-center'><img src={itemImages.Bookmark} />Watchlist</button>
          <button className='flex gap-2 items-center'><img src={itemImages.User}/>User</button>
          <div className='flex gap-5'>
            <button className='flex gap-2 items-center'>EN<img src={itemImages.Dropdown} /></button>
            <div
              onMouseEnter={() => setHoverTheme(true)}
              onMouseLeave={() => setHoverTheme(false)}
              className='relative'
            >
              <img src={itemImages.Theme}/>
              {hoverTheme && (
                <ThemeDropDown />
              )}
            </div>
          </div>
        </div>
      </nav>
      {hoverMenu && (
        <MenuDropDown currentMenu={hoverMenu}/>
      )}
    </div>
  )
}