import { useEffect,useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurant(){
    
    const [restdata,setrestdata]=useState([]);

    

    async function fetchdata(){
        
        const proxyserver='https://cors-anywhere.herokuapp.com/'
        const SwiggyAPI= 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING' 

        const response=await fetch(proxyserver+SwiggyAPI);
        const data=await response.json();
        setrestdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        
    }

    

    useEffect(()=>{
        fetchdata()
    },[])
   

    // shimmer effect

    if(restdata.length==0){
        return (
            <Shimmer></Shimmer>
        )
    }

    

    

    return(
        <div className="flex flex-wrap gap-27 container mx-auto w-[85%] mt-10">
            {
                restdata?.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
            }

        </div>
    )


    


}