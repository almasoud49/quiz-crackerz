import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
            <div className="navbar bg-gray-200 text-yellow-800 text-2xl">
            <div className="flex-1">
            <p className='mr-auto ml-10 '>Quiz Contest</p>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <Link className='mr-7 ' to='/home'>Home</Link>
            <Link className='mr-7 ' to='/topics'>Topics</Link>
            <Link className='mr-7 ' to='/statistics'>Statistics</Link>
            <Link className='mr-7 ' to='/blog'>Blog</Link>
            </ul>
        </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;