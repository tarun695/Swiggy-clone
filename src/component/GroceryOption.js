import {GroceryGridCards} from '../utils/Grocery'
import GroceryCard from './GroceryCard'


export default function GroceryOption(){
    return(
        <div className='mt-20 w-[80%] container mx-auto '>
            <h1 className='text-xl font-semibold'>Shop groceries on Instamart</h1>
            <div className='flex flex-nowrap overflow-x-auto gap-5 mt-5'>
            {GroceryGridCards.map((grocerydata)=><GroceryCard key={grocerydata.id} grocerydata={grocerydata} ></GroceryCard>)}

            </div>

        </div>

        
        

    )
}


