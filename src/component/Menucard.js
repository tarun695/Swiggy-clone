import { useState } from "react";
import Foodtypes from "./Foodtypes"

export default function Menucard({menuitems,selected}){


    const [isopen,setisopen]=useState(true);
    

    if (!menuitems) return null;
    if('categories' in menuitems){
        return(

            <div>
            <h1 className="font-bold">{menuitems?.title}</h1>
            <div>
                {menuitems?.categories?.map((menudata)=><Menucard key={menudata?.title} menudata={menudata} selected={selected}></Menucard>)}
            </div>
            </div>
    
        )

    }

    if(isopen==false){
        return(
            <>
            <div className="flex">
                <h1 className="font-bold mt-5">{menuitems?.title}</h1>
                <button className="h-8 w-7 overflow-hidden ml-270 mt-5" onClick={()=>setisopen(!isopen)}>{isopen?'^':'v'}</button>

            </div>

            <hr className="w-310 h-4 border-b-[16px] border-solid border-[rgba(2,6,12,0.0509803922)]"></hr>

            </>
        )
    }

    if(selected=='veg'){
        return(

            <div>
                <div className="flex">
                    <h1  className="font-bold mt-5">{menuitems?.title}</h1>
                    <button className="h-4 w-4 overflow-hidden ml-270 mt-5" onClick={()=>setisopen(!isopen)}>{isopen?'^':'v'}</button>
    
    
                </div>
                <div>
                    {menuitems?.itemCards?.filter((item)=>'isVeg' in item?.card?.info).map((menudata)=><Foodtypes key={menudata?.card?.info?.id} menudata={menudata?.card?.info}></Foodtypes>)}
                </div>
            </div>
    
            
    
        )
       
        
    }


    if(selected=='nonveg'){
        return(

            <div>
                <div className="flex">
                    <h1  className="font-bold mt-5">{menuitems?.title}</h1>
                    <button className="h-4 w-4 overflow-hidden ml-270 mt-5" onClick={()=>setisopen(!isopen)}>{isopen?'^':'v'}</button>
    
    
                </div>
                <div>
                    {menuitems?.itemCards?.filter((item)=>!('isVeg' in item?.card?.info)).map((menudata)=><Foodtypes key={menudata?.card?.info?.id} menudata={menudata?.card?.info}></Foodtypes>)}
                </div>
            </div>
    
            
    
        )
       
        
    }

  
    
    return(

        <div>
            <div className="flex">
                <h1  className="font-bold mt-5">{menuitems?.title}</h1>
                <button className="h-4 w-4 overflow-hidden ml-270 mt-5" onClick={()=>setisopen(!isopen)}>{isopen?'^':'v'}</button>


            </div>
            <div>
                {menuitems?.itemCards?.map((menudata)=><Foodtypes key={menudata?.card?.info?.id} menudata={menudata?.card?.info}></Foodtypes>)}
            </div>
        </div>

        

    )
   

}