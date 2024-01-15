import { RxTriangleDown } from "react-icons/rx"
import OverView from "./OverView";
import "../style/DetailsHeader.css"
import { useState } from "react";
import Media from "./Media";
import Fandom from "./Fandom";
import Share from "./Share";
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

                <li onMouseEnter={() => setOpenMenu("mediaTrue")} onMouseLeave={() => setOpenMenu("mediafalse")} className="relative text-sm pb-2 flex items-start">
                    <p className="cursor-pointer flex text-white">Media{triangle}</p>
                    {(openMenu === "mediaTrue") && <Media />}
                </li>

                <li onMouseEnter={() => setOpenMenu("fandomTrue")} onMouseLeave={() => setOpenMenu("fandomfalse")} className="relative text-sm pb-2 flex items-start">
                    <p className="cursor-pointer flex text-whiteMed text-white">Fandom{triangle}</p>
                    {
                        openMenu === "fandomTrue" && <Fandom />
                    }
                </li>

                <li onMouseEnter={() => setOpenMenu("shareTrue")} onMouseLeave={() => setOpenMenu("sharefalse")} className="relative text-sm pb-2 flex items-start">
                    <p className="cursor-pointer flex text-white">Share{triangle}</p>
                    {
                        openMenu === "shareTrue" && <Share />
                    }
                </li>
            </div>
        </div>
    )
}

export default DetailsHeader;

