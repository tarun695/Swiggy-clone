import { Link } from "react-router"

export default function RestCard({restInfo}){
    return(
        <Link to={`/city/delhi/${restInfo.info.id}`}>
        <div className="w-68 h-45 flex-none transform transition duration-200 hover:scale-95">
            <img className="w-68 h-45 object-cover rounded-2xl" src={'https://media-assets.swiggy.com/swiggy/image/upload/' + restInfo?.info?.cloudinaryImageId}></img>

            <div className="mt-2 font-bold text-sm">{restInfo?.info?.name}</div>
            <div className="flex gap-2 font-bold text-sm">
                <div>{restInfo?.info?.avgRating}</div>
                <div>{restInfo?.info?.sla?.slaString}</div>
                
                

            </div>

            <div className="text-gray-600 text-sm">{restInfo?.info?.cuisines.join(' ')}</div>

            <div className="text-gray-600 text-sm">{restInfo?.info?.areaName}</div>


        </div>

        </Link>
    )
}