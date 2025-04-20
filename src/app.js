import ReactDOM from 'react-dom/client'
import React from 'react'
import Home from './component/Home'
import './index.css'
import Restaurant from './component/Restaurant'
import {Routes,Route, BrowserRouter} from 'react-router'
import RestaurantMenu from './component/RestaurantMenu'
import SearchFood from './component/SearchFood'
import SecondaryHome from './component/SecondaryHome'


function App(){
    return(
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
                <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
                <Route path='/city/delhi/:id' element={<RestaurantMenu></RestaurantMenu>}></Route>
                <Route path='/city/delhi/:id/search' element={<SearchFood></SearchFood>}></Route>
            </Route>

          </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)