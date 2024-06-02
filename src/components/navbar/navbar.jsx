import { useState } from 'react';
import "../../index.css";
import { itemImages } from './itemImages';
import { menuImages } from './menuImages'; 
import { menuItems } from './menuItems';
import MenuDropDown from './menuDropdown';
import ThemeDropDown from './themeDropdown';

export default function NavBar() {

  const [hoverMenu, setHoverMenu] = useState(null);
  const [hoverTheme, setHoverTheme] = useState(false);

  return (
    <>
      <nav className='flex fixed text-dark-textPrimary bg-dark-bgNav py-3 justify-center items-center w-full'>
        <div className='flex justify-between items-center gap-6'>
          <img src={itemImages.Logo}/>
          <ul className='relative flex gap-5'>
            {Object.keys(menuItems).map((items) => (
              <li keys = {items} className='relative text-p' onMouseEnter={() => setHoverMenu(items)} onMouseLeave={() => setHoverMenu(null)}>
                {items}
                {hoverMenu === items && (
                  <div className='fixed left-0 mt-[1rem] w-screen' >
                    <MenuDropDown keys = {items} content={menuItems[hoverMenu]} image={menuImages[hoverMenu]}/>
                  </div>
                )} 
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
          <div className='flex gap-3.5'>
            <button className='flex gap-2 items-center'>EN<img src={itemImages.Dropdown} /></button>
            <div
              onMouseEnter={() => setHoverTheme(true)}
              onMouseLeave={() => setHoverTheme(false)}
              className='relative'
            >
              <img src={itemImages.Theme}/>
              {hoverTheme && (
                <div className='absolute left-1/2 -translate-x-1/2 p-4'>
                  <ThemeDropDown />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}