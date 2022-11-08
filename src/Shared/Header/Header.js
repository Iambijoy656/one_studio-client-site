import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    const menuItems = <>
        <li className='mr-3'><Link to='/'>Home</Link></li>
        <li className='mr-3'><Link to='/'>Service</Link></li>
        <li className='mr-3'><Link to='/'>Our Gallery</Link></li>
        <li className='mr-3'><Link to='/'>Blog</Link></li>
        <li className='mr-3'><Link to='/'>Sign In</Link></li>
        <li className='mr-3'><Link to='/'>Sign Out</Link></li>
    </>
    return (
        <div className="navbar bg-purple-900 ">
            <div className="navbar-start">
                <div className="dropdown text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow text-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-64 h-20">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-white ">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn btn-error">Get started</a> */}
            </div>
        </div>
    );
};

export default Header;