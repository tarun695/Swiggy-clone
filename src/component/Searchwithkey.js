import Searching from "./Searching"

export default function Searchwithkey({items,food}){
    return(
        <div>
            {
                items?.map((restitems)=><Searching key={restitems?.card?.info?.id} restitems={restitems?.card?.info} food={food}></Searching>)

            }
        </div>
    )
}
