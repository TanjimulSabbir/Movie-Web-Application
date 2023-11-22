import { RxTriangleRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Media() {
    return (
        <div>
            <ul className='absolute top-6 left-0 border shadow-md bg-black w-[200px] pl-7 py-5 rounded-md text-white overflow-auto space-y-2 text-base z-30'>
                <li><Link to="">Backdrops</Link></li>
                <li><Link to="">Logos</Link></li>
                <li><Link to="">Posters</Link></li>
                <li><Link className="flex" to="">
                    <span>Videos</span>
                    <RxTriangleRight /></Link></li>
            </ul>
        </div>
    )
}
