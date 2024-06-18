import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import {shoppingCart} from 'react-icons-kit/fa/shoppingCart'
import Icon from "react-icons-kit";
import useCart from "../hooks/useCart";



const Navbar = () => {
    const { user, logout } = UseAuth() || {};
    const [cart] = useCart();

    const navItems = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/' >Community</Link></li>
        <li><Link to='/' >Blogs</Link></li>
        <li>
            <details className="z-50">
                <summary>About</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Contact</a></li>
        <li><Link to='/dashboard/cart'>
            <button className="btn">
            <Icon icon={shoppingCart} size={25}/>
                <div className="badge badge-secondary">+0{cart.length}</div>
            </button>
        </Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Navigate<span className="text-2xl text-red-600 font-bold">B</span><span className="text-2xl text-green-600 font-bold">D</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Link to='dashboard'>Dashboard</Link></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </ul>
                </div>
                    </> : <>
                    <Link to='/login' className="btn bg-bd-button text-white text-xl font-bold">Login</Link>
                    </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;