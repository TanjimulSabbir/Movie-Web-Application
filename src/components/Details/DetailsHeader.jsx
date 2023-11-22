import { RxTriangleDown } from "react-icons/rx"
import OverView from "./OverView";
import "../style/DetailsHeader.css"
import { useState } from "react";
function DetailsHeader() {
    const triangle = <RxTriangleDown className="text-xl cursor-pointer" />
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="flex items-center justify-center mb-10">
            <div className="flex space-x-8">
                <li onMouseEnter={()=>setOpenMenu(true)} onMouseLeave={()=>setOpenMenu(false)} className="relative text-sm border-b-4 pb-2 flex items-start transition-all duration-500 border-sky-500">
                     <span className="cursor-pointer">Overview</span>{triangle}
                   {openMenu&& <OverView></OverView>}
                </li>
                <li className="text-sm border-b-4 pb-2 flex items-start">Media{triangle}</li>
                <li className="text-sm border-b-4 pb-2 flex items-start">Fandom{triangle}</li>
                <li className="text-sm border-b-4 pb-2 flex items-start">Share{triangle}</li>
            </div>
        </div>
    )
}

export default DetailsHeader;

