export default function GroceryCard({grocerydata}){
    return(
        <div className=' flex flex-col w-46 h-60'>
        <a className='w-36 h-45' href={grocerydata?.action?.link}>
            <img  src={'https://media-assets.swiggy.com/swiggy/image/upload/' + grocerydata?.imageId}></img>
        </a>
        <h1>{grocerydata?.action?.text}</h1>
        </div>

    )
}