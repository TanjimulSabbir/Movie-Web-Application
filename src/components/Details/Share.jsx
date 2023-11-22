import { Link } from 'react-router-dom';

function Share() {
    return (
        <ul className='absolute top-6 left-0 border shadow-md bg-black w-[170px] py-4 pl-5 rounded-md text-white overflow-auto space-y-2 text-base z-30'>

            <li>
                <Link to="">
                    <p>
                        <span className="text-white">ShareLink</span>
                    </p>
                </Link>
            </li>
            <li>
                <Link to="">
                    <p>
                        <span className="text-white">Facebook</span>
                    </p>
                </Link>
            </li>
            <li>
                <Link to="">
                    <p>
                        <span className="text-white">Tweet</span>
                    </p>
                </Link>
            </li>
        </ul>
    )
}

export default Share;