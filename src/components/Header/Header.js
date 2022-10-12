import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
            <div className='flex w-full h-15 bg-slate-400 text-white text-3xl'>
            <p className='mr-auto ml-10 p-8'>Quiz Contest</p>
            <Link className='mr-5 p-8' to='/home'>Home</Link>
            <Link className='mr-5 p-8' to='/topics'>Topics</Link>
            <Link className='mr-5 p-8' to='/statistics'>Statistics</Link>
            <Link className='mr-10 p-8' to='/blog'>Blog</Link>
            </div>
            </nav>
        </div>
    );
};

export default Header;