import { Outlet } from "react-router";
import RestHeader from "./RestHeader";

export default function SecondaryHome(){
    return(
        <div>
            <RestHeader></RestHeader>
            <Outlet></Outlet>
        </div>
    )
}