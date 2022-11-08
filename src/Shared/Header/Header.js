import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Context/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {



            })
            .catch(error => {
                console.error(error);
            })
    }

    const menuItems = <>
        <li>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? 'greenyellow' : 'white'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/services"
                style={({ isActive }) => ({
                    color: isActive ? 'greenyellow' : 'white'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

            >
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/gallery"
                style={({ isActive }) => ({
                    color: isActive ? 'greenyellow' : 'white'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

            >
                Gallery
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                style={({ isActive }) => ({
                    color: isActive ? 'greenyellow' : 'white'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

            >
                Blog
            </NavLink>
        </li>


        {
            user?.email ?
                <>
                    <li>
                        <NavLink
                            to="/review"
                            style={({ isActive }) => ({
                                color: isActive ? 'greenyellow' : 'white'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

                        >
                            My Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addservice"
                            style={({ isActive }) => ({
                                color: isActive ? 'greenyellow' : 'white'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

                        >
                            Add Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            onClick={handleLogOut}
                            to="/"

                            className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

                        >
                            Sign Out
                        </NavLink>
                    </li>

                    <li>
                        <Link to="/profile">
                            <img
                                className="w-10 rounded-full"
                                data-tip={user.displayName}
                                src={user?.photoURL}
                                alt=""
                            />
                        </Link>
                        <ReactTooltip />
                    </li>

                </>
                :
                <>

                    <li>
                        <NavLink
                            to="/login"
                            style={({ isActive }) => ({
                                color: isActive ? 'greenyellow' : 'white'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

                        >
                            SingIn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            style={({ isActive }) => ({
                                color: isActive ? 'greenyellow' : 'white'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-purple-900"

                        >
                            Signup
                        </NavLink>
                    </li>
                </>
        }




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