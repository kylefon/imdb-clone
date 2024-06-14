import { useState } from 'react';
import "../../index.css";
import { itemImages } from './data/itemImages';
import { menuItems } from './data/menuItems';
import MenuDropDown from './menuDropdown';
import ThemeDropDown from './themeDropdown';
import hamburgerMenu from './assets/hamburger.svg'
import SideoutMenu from './sideoutMenu';

export default function NavBar() {

  const [hoverMenu, setHoverMenu] = useState(null);
  const [hoverTheme, setHoverTheme] = useState(false);
  const [sideoutMenu, setSideoutMenu] = useState(false);


  return (
    <div className='sticky top-0 z-50'>
      <nav className='flex text-dark-textPrimary bg-dark-bgNav/[0.7] p-3 justify-center items-center'>
        <div className='flex justify-between items-center w-[1350px] gap-5'>
          <div className='flex gap-6'>
            <img src={hamburgerMenu} className='mdlg:hidden'onClick={() => setSideoutMenu(!sideoutMenu)}/>
            <img src={itemImages.Logo}/>
            <ul className='relative flex gap-5 hidden mdlg:flex'>
              {Object.keys(menuItems).map((items, index) => (
              <li key = {index} className='relative text-p' onMouseEnter={() => setHoverMenu(items)} onMouseLeave={() => setHoverMenu(null)}>
                  {items}
                </li>
              ))} 
            </ul>
          </div>
          <div className='flex flex-1 justify-end gap-6'>
            <div className='hidden sm:flex flex-1 relative'>
              <div className='hidden sm:flex gap-4 bg-dark-bgSecondary py-1 px-5 rounded-lg flex-1'>
                <button className='flex gap-2 items-center'>All<img src={itemImages.Dropdown} /></button>
                <input className='bg-dark-bgSecondary text-dark-textSecondary' placeholder='Search IMDb'></input>
                <img src={itemImages.Search} className='absolute right-0 flex items-center py-[3px] px-5' />
              </div>
            </div> 
            <div className='sm:hidden flex items-center'>
              <img src={itemImages.Search}/>
            </div>
            <div className='flex gap-6'>
              <button className='hidden md:flex gap-2 items-center'>
                <img src={itemImages.Bookmark} />Watchlist
              </button>
              <button className='flex gap-2 items-center'>
                <img src={itemImages.User}/>
                <span className='hidden md:inline'>User</span>
              </button>
            </div>
            <div className='hidden md:flex gap-5 items-center'>
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
            <div className='bg-light-yellow rounded-lg px-[8px] py-[5px] flex justify-center items-center font-bold md:hidden'>
              <p className='text-[13px] text-light-textPrimary'>Use App</p>
            </div>
          </div>
        </div>
      </nav>
      {hoverMenu && (
        <MenuDropDown currentMenu={hoverMenu}/>
      )}
      {sideoutMenu && (
        <div className='mdlg:hidden'>
          <SideoutMenu />
        </div>
      )}
    </div>
  )
}