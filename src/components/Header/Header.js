import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex '>
            <p className='mr-auto'>Quiz Contest</p>
            <Link to='/home'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;