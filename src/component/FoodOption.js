import { imageGridCards } from "../utils/Fooditems"
import FoodCard from "./FoodCard"

export default function FoodOption(){
    return(
        <div className=" w-[80%] flex container mx-auto flex-wrap mt-20 gap-7">
            {imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} ></FoodCard>)}
        </div>
    )
}