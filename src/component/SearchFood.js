import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Searchwithkey from "./Searchwithkey";

export default function SearchFood(){

    const {id}=useParams();

    
    const [restdata,setrestdata]=useState([]);
    const [food,setfood]=useState('');

    async function fetchdata(){
        const proxyserver='https://cors-anywhere.herokuapp.com/';
        const SwiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        
        const response=await fetch(proxyserver+SwiggyAPI);
        const data=await response.json();
        const tempdata=data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        const filterdata=tempdata.filter((items)=>'title' in items.card.card);
        
        
        setrestdata(filterdata);
    }

    useEffect(()=>{
        fetchdata()
    },[])

    console.log(restdata);




    return(
        <div>
            <input
                type="text"
                placeholder="Search for dishes"
                value={food}
                onChange={(e) => setfood(e.target.value)}
                className="block mx-auto mt-6 mb-4 px-4 py-2 w-4/5 max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
                />
            {
                restdata.map((items)=><Searchwithkey key={items?.card?.card?.title} items={items?.card?.card?.itemCards} food={food} ></Searchwithkey>)
            }
        </div>
    )
}