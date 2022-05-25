import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from './Loading'
import { signOut } from 'firebase/auth';

const Nav = () => {
    let [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />;
    }

    const signout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
    </>
    return (
        <div class="lg:px-12 px-0 navbar bg-base-100">
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
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">

                        <li>{user ? <button className="btn btn-ghost" onClick={signout} >SIGN OUT</button> : <Link to="/signin">SIGN IN</Link>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;