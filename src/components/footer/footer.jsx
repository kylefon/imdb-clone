import xIcon from './assets/x.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import tiktok from './assets/tiktok.svg'
import youtube from './assets/youtube.svg'
import arrowUp from './assets/arrowUp.svg'

export default function Footer() {
    return (
        <div className='py-[50px] flex flex-col justify-center gap-[63px] bg-dark-bgNav mt-[231px]'>
            <div className='flex justify-center inline-block'>
                <div className='bg-light-yellow rounded-lg px-[18px] py-[15px] flex justify-center items-center'>
                    <p className='text-p text-light-textPrimary'>Unlock the full IMDb experience — Sign up now</p>
                </div>
            </div>
            <div className='flex justify-center inline-block'>
            <div className='flex gap-[213px] justify-center'>
                <div className='text-dark-textPrimary flex gap-[141px] justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <p>Get the IMDb app</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex items-center'>
                            <p>IMDbPro</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex items-center'>
                            <p>IMDb Developer</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex'>
                            <p>Box Office Mojo</p>
                            <img src={arrowUp} />
                        </div>                        
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'> 
                            <p>Advertising</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex items-center'>
                            <p>Jobs</p>
                            <img src={arrowUp} />
                        </div>
                        <p>Press Room</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <p>Help</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex items-center'>
                            <p>Site Index</p>
                            <img src={arrowUp} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Conditions of Use</p>
                            <p>Privacy Policy</p>
                            <p>Your Ads Privacy Choices</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex gap-[27px]'>
                        <img src={tiktok} />
                        <img src={xIcon} />
                        <img src={youtube} />
                        <img src={instagram} />
                        <img src={facebook} />
                    </div>
                    <p className='text-footer text-dark-textSecondary'>© 1990-2024 by IMDb.com, Inc.</p>
                </div>
            </div>
            </div>
        </div>
    )
}