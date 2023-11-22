import { RxTriangleRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Media() {
    return (
        <div>
            <ul className='absolute top-6 left-0 border shadow-md bg-black w-[200px] py-5 px-7 rounded-md text-white overflow-auto space-y-2 text-base z-30'>
                <li>
                    <Link to="">
                        <p className="flex items-center justify-between">
                            <span className="text-white">Backdrops</span>
                            <span>5</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <p className="flex items-center justify-between">
                            <span className="text-white">Logos</span>
                            <span>4</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <p className="flex items-center justify-between">
                            <span className="text-white">Posters</span>
                            <span>8</span>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <p className="flex items-center justify-between">
                            <span className="text-white">Videos</span>
                            <RxTriangleRight className="text-lg" />
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
