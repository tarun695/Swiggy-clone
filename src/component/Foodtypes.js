import { useState } from "react"

export default function Foodtypes({menudata}){
    const [count,setcount]=useState(0);
    return(
        <>
        <div className="flex justify-between p-10">
            <div>
                <p className="font-semibold text-lg">{menudata?.name}</p>
                <p className="font-extralight text-base">{menudata?.description}</p>
            </div>

            <div className="w-[20%] relative">
                <img className="w-full h-36 w-35 object-cover" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+menudata?.imageId}></img>
                {
                    count===0?(<button className="absolute left-0 bottom-0 text-green-600 px-4 py-2 bg-white">ADD</button>):(<div className="flex">
                        <button onClick={()=>setcount(count-1)}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>setcount(count+1)}>+</button>
                        

                    </div>)
                }
            </div>

            

        </div>

        <hr></hr>  

        </> 
    )
}