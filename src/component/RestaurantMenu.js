import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Menucard from "./Menucard";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

export default function RestaurantMenu(){
    let {id}=useParams();

    const [restdata,setrestdata]=useState([]);
    const [selected,setselected]=useState(null);

    async function fetchdata(){
        const proxyserver='https://cors-anywhere.herokuapp.com/';
        const SwiggyAPI=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

        const response=await fetch(proxyserver+SwiggyAPI);
        const data=await response.json();
        const tempdata=data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        const filterdata=tempdata.filter((items)=>'title' in items.card.card)
        setrestdata(filterdata);

    }

    useEffect(()=>{
        fetchdata();


    },[])


    if(restdata.length==0){
        return (
            <Shimmer></Shimmer>
        )
    }

   

    


    return(

        <div>

            <div className="container mx-auto mt-20 mb-20 ml-100">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="text-center bg-gray-200 rounded-4xl p-5 w-200" >Search for dishes</p>
                </Link>
            </div>

            <div className="mt-5 ml-50 container mx-auto ">
                <button className={`text-2xl border rounded-2xl py-2 px-6 mr-2 ${selected==='veg'?'bg-green-600':'bg-gray-300'}`} onClick={()=>setselected(selected==='veg'?null:'veg')} >Veg</button>
                <button className={`text-2xl border rounded-2xl py-2 px-4 mr-2 ${selected==='nonveg'?'bg-red-500':'bg-gray-300'} `} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>NonVeg</button>
            </div>
        <div className='w-[75%] mx-auto container'>

            {
                restdata.map((menuitems)=><Menucard key={menuitems?.card?.card?.title} selected={selected} menuitems={menuitems?.card?.card}></Menucard>)
            }
        
            
        </div>

        </div>
    )
    

    

}