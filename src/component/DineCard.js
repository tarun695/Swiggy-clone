export default function DineCard({restdata}){
    return(
        <div className="flex-none w-82 h-100 ">

            <div className='relative'>
                <img className="w-81 h-47 object-cover"  src={'https://media-assets.swiggy.com/swiggy/image/upload/' + restdata?.info?.mediaFiles[0].url}></img>
                <p className="absolute left-2 bottom-2 text-white font-extrabold text-xl">{restdata?.info?.name}</p>
                <p className="absolute right-3 bottom-2 text-white">{restdata?.info?.rating?.value}</p>
            </div>

            <div>

            </div>
            

        </div>

    )
}