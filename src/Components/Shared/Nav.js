import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from './Loading'
import { signOut } from 'firebase/auth';
import {
    AnnotationIcon,
    BanIcon,
    BeakerIcon,
    BookmarkIcon,
    BookOpenIcon,
    ChartSquareBarIcon,
    CogIcon,
    HomeIcon,
    MailIcon,
    MapIcon,
    MenuIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/solid";
import CustomLink from './CustomLink';

const Nav = () => {
    let [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    if (loading) {
        return <Loading />;
    }

    const signout = () => {
        signOut(auth);
        navigate('/');
        // localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><CustomLink className="font-normal mt-2 flex text-[20px]  items-center" to="/"><HomeIcon className="w-5 h-5 mr-1"></HomeIcon> HOME</CustomLink></li>
        <li><CustomLink className="font-normal mt-2 flex text-[20px]  items-center" to="/blogs"><AnnotationIcon className="w-5 h-5 mr-1"></AnnotationIcon> BLOGS</CustomLink></li>
        <li><CustomLink className="font-normal mt-2 flex text-[20px]  items-center" to="/portfolio"><BookmarkIcon className="w-5 h-5 mr-1"></BookmarkIcon>MY PORTFOLIO</CustomLink></li>
        {
            user && <li><CustomLink className="font-normal  mt-2 flex text-[20px]  items-center" to="/dashboard"><CogIcon className="w-5 h-5 mr-1"></CogIcon> DASHBOARD</CustomLink></li>
        }
    </>
    return (
        <div class="lg:px-12 px-0 navbar bg-base-100 fixed z-50 shadow-lg top-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img src="https://html.modernwebtemplates.com/electrix/images/logo.png" alt="" />
            </div>
            <div class="navbar-center hidden pl-24 lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>
            <div class="navbar-end">
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        {pathname.includes("/dashboard") && (
                            <label
                                htmlFor="my-drawer-2"
                                tabIndex="0"
                                className="btn btn-ghost btn-circle lg:hidden"
                            >
                                <MenuIcon className='w-6'></MenuIcon>
                            </label>
                        )}
                        <li>{user ? <button className="hover:text-white btn px-0 bg-white border-0 font-bold tect-neutral" onClick={signout} >SIGN OUT</button> : <CustomLink className="font-bold" to="/signin">SIGN IN</CustomLink>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;