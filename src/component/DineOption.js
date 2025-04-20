import {dineoutRestaurants} from '../utils/DineData'
import DineCard from './DineCard'

export default function DineOption(){
    return(
        <div className=' w-[80%] mt-20 container mx-auto'>
            <h2 className='text-xl font-semibold'>Discover best restaurants on Dineout</h2>
            <div className='flex flex-nowrap overflow-x-auto mt-5 gap-5'>
                {
                  dineoutRestaurants.map((restdata)=><DineCard key={restdata.info.id} restdata={restdata}></DineCard>)  
                }

            </div>
        </div>
    )
}