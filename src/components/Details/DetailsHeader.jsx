import { RxTriangleDown } from "react-icons/rx"
import OverView from "./OverView";
import "../style/DetailsHeader.css"
import { useState } from "react";
import Media from "./Media";
function DetailsHeader() {
    const triangle = <RxTriangleDown className="text-xl" />
    const [openMenu, setOpenMenu] = useState("");

    return (
        <div className="flex items-center justify-center mb-10">
            <div className="flex space-x-8">
                <li onMouseEnter={() => setOpenMenu("overviewTrue")} onMouseLeave={() => setOpenMenu("overviewFalse")} className="relative text-sm border-b-4 pb-2 transition-all duration-500 border-sky-500">
                    <p className="cursor-pointer flex text-white">Overview {triangle}</p>
                    {(openMenu === "overviewTrue") && <OverView />}
                </li>

                <li onMouseEnter={() => setOpenMenu("mediaTrue")} onMouseLeave={() => setOpenMenu("Mediafalse")} className="relative text-sm border-b-4 pb-2 flex items-start">
                    <p className="cursor-pointer flex text-white">Media{triangle}</p>
                    {(openMenu === "mediaTrue") && <Media />}
                </li>
                <li className="relative text-sm border-b-4 pb-2 flex items-start">
                    <p className="cursor-pointer flex text-whiteMed">Fandom{triangle}</p>
                </li>
                <li className="relative text-sm border-b-4 pb-2 flex items-start">
                    <p className="cursor-pointer flex text-white">Share{triangle}</p>
                </li>
            </div>
        </div>
    )
}

export default DetailsHeader;

