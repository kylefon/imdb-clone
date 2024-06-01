import { useState } from 'react';
import "D:/projects/imdb-clone/src/index.css"
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
      <nav className='flex text-[#c3c3c3] bg-black py-4 px-80 justify-center items-center w-full'>
        <div className='flex justify-between items-center w-full'>
          <img src={itemImages.Logo} />
          <ul className='relative flex'>
            {Object.keys(menuItems).map((items) => (
              <li keys = {items} onMouseEnter={() => setHoverMenu(items)} onMouseLeave={() => setHoverMenu(null)} className='px-2'>
                {items}
                {hoverMenu === items && (
                  <div className='fixed left-0 w-screen h-1/4 mt-[1rem]'>
                    <MenuDropDown keys = {items} content={menuItems[hoverMenu]} image={menuImages[hoverMenu]}/>
                  </div>
                )} 
              </li>
            ))} 
          </ul>

          <div className='flex gap-4 bg-[#1A1A1A] px-3 rounded-lg'>
            <button className='flex gap-2 items-center'>All<img src={itemImages.Dropdown} /></button>
            <input className='bg-[#1A1A1A] text-[#797979] p-1 pr-28' placeholder='Search IMDb'></input>
            <img src={itemImages.Search} />
          </div> 

          <button className='flex gap-2 items-center'><img src={itemImages.Bookmark} />Watchlist</button>
          <button className='flex gap-2 items-center'><img src={itemImages.User}/>User</button>
          <div className='flex gap-3'>
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