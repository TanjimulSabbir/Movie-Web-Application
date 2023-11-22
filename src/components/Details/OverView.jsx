import { Link } from 'react-router-dom';

const OverView = () => {
    return (
        <ul className='absolute top-6 left-0 border shadow-md bg-black w-[200px] pl-7 py-5 rounded-md text-white overflow-auto space-y-2 text-base z-30'>
            <li><Link to="">Main</Link></li>
            <li><Link to="">Alternative Titles</Link></li>
            <li><Link to="">Cast &amp; Crew</Link></li>
            <li><Link to="">Release Dates</Link></li>
            <li><Link to="">Translations</Link></li>
            <div className='pt-4 space-y-2'>
                <li><Link to="" title="Changes">Changes</Link></li>
                <li><Link to="/report" title="Report">Report</Link></li>
                <li><Link to="" title="Edit">Edit</Link></li>
            </div>
        </ul>
    );
};

export default OverView;