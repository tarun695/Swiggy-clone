import { useState } from "react";

export default function Searching({food,restitems}){
    const [count,setcount]=useState(0);
    const isPresent = restitems.name.toLowerCase().includes(food.toLowerCase());
    return(
        <div>
            {
                isPresent?(
                    <>
                    <div className="flex justify-between p-10">
                        <div>
                            <p className="font-semibold text-lg">{restitems?.name}</p>
                            <p className="font-extralight text-base">{restitems?.description}</p>
                        </div>
            
                        <div className="w-[20%] relative">
                            <img className="w-full h-36 w-35 object-cover" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+restitems?.imageId}></img>
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
                    
                ):null
                
            }
        </div>
    )

}