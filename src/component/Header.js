import { Link } from "react-router"

export default function Header(){
    return(
        
        <header className="bg-[#ff5200] h-186" >
            
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"/>

                <div className="text-white flex gap-15 items-center font-bold ">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://partner.swiggy.com/login#/swiggy">Get the App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl " target="_blank" href="https://partner.swiggy.com/login#/swiggy">Sign in</a>

                </div>
            </div>


            <div className='relative pt-16 pb-8'>
                <img className='absolute top-0 left-0 h-100 w-60' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png'></img>
                <img className='absolute top-0 right-0 h-100 w-60'  src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png'></img>
                <div className='w-[60%] text-5xl text-white text-center font-bold pl-3 mx-auto '>Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className='container mx-auto w-[70%] flex mt-6 mx-auto items-center justify-center'>
                    <input className='bg-white w-75 h-15 rounded-2xl text-center' placeholder="Enter your delivery location"></input>
                    <input className='bg-white w-125 h-15 pl-4 ml-5 rounded-2xl ' placeholder='Search for restaurant, item or more'></input>
                    
                </div>

            </div>


            <div className='flex container mx-auto max-w-[70%]'>

                <Link to='/restaurant'>
                    <img className='w-70 h-80' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png'></img>
                </Link>

                

                <a className='w-70 h-80'  href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png'></img>
                    
                </a>

                <a className='w-70 h-80' href='https://www.swiggy.com/dineout'>

                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png'></img>

                </a>

                <a className='w-70 h-80' href='https://www.swiggy.com/genie'>

                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png'></img>

                </a>

            </div>
        </header>
    )
}