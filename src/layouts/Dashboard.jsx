import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUpload, FaUsers } from "react-icons/fa";
import { FaBookBookmark, FaFaceGrin, FaPenToSquare } from "react-icons/fa6";
import { RiAdminFill, RiLogoutBoxLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import UseAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const {user, logout} = UseAuth();

    //TODO: get isAdmin value from the db
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-red-200">
                <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">View profile</a>
                        </span>
                    </div>
                </div>
                <ul className="menu p-2">
                    <li className="bg-gray-100 text-gray-900">
                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addPackage'>
                                    <FaUpload/>
                                    Add package
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/managePackages'>
                                    <FaList/>
                                    Manage package
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageUsers'>
                                    <FaUsers/>
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'>
                                    <FaBookBookmark/>
                                    Manage Bookings
                                </NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to='/dashboard/userHome'>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaFaceGrin></FaFaceGrin>
                                    My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Wishlist ({cart.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaCalendar></FaCalendar>
                                    My Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaPenToSquare />
                                    Write a story
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <RiAdminFill />
                                    Request to admin
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
                {/* shared/common navlinks in dashboard for all */}
                <div className="divider"></div>
                <ul className="pb-0 menu">
                    <li>
                        <NavLink to='/'>
                            <VscSettingsGear />
                            Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>
                            <RiLogoutBoxLine />
                            Log Out
                        </button>
                    </li>
                </ul>
                <div className="divider"></div>
                <div className="flex flex-col items-center mb-1">
                    <h1 className="text-2xl text-white font-bold">Navigate<span className="text-3xl text-red-600">B</span><span className="text-3xl text-green-600">D</span></h1>
                    <p className="text-yellow-600 text-sm">The Ultimate Guide to Bangladesh</p>
                </div>
            </div>
            <div className="flex-1 bg-green-200 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;