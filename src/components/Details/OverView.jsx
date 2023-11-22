import { Link } from 'react-router-dom';

const OverView = () => {
    return (
        <ul className='absolute top-6 left-0 border shadow-md bg-black w-[200px] pl-7 py-5 rounded-md text-white overflow-auto space-y-2 text-base'>
            <li role="menuitem"><Link to="">Main</Link></li>
            <li role="menuitem"><Link to="">Alternative Titles</Link></li>
            <li role="menuitem"><Link to="">Cast &amp; Crew</Link></li>
            <li role="menuitem"><Link to="">Release Dates</Link></li>
            <li role="menuitem"><Link to="">Translations</Link></li>
            <div className='pt-4 space-y-2'>
                <li role="menuitem"><Link to="" title="Changes">Changes</Link></li>
                <li role="menuitem"><span className="no_click report" title="Report">Report</span></li>
                <li role="menuitem"><Link className="keyboard_s edit_page" to="" title="Edit">Edit</Link></li>
            </div>
        </ul>
    );
};

export default OverView;