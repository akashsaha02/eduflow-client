import { NavLink } from "react-router-dom"
import { FaListCheck, FaCartShopping, } from "react-icons/fa6"
import { FaCalendarCheck, FaCalendarDay, FaBook, FaUsers, FaShoppingBag } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { MdPayments, MdReviews } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
// import logo from '../../assets/logo.png'
import useAdmin from "../../hooks/useAdmin";
import Loader from "../shared/Loader"

const Sidebar = () => {


    const [isAdmin, isAdminLoading] = useAdmin();
    if(isAdminLoading) {
        return <Loader />
    }
    console.log(isAdmin);

    const sidebarItems =
        isAdmin ? <>

            <li>
                <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-white bg-yellow-100"
                            : "text-black hover:!text-yellow-400 font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={20} />
                        <p className="text-lg">Admin Home</p>
                    </div>

                </NavLink>
            </li>
          


        </> :
            <>
                <li>
                    Student home
                </li>
            </>


    const sharedNavItems = <>
        <li>
            <div className="divider divider-warning"></div>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-white bg-yellow-400"
                        : "text-black hover:text-yellow-500 font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <HiHome className="inline-block" size={20} />
                    <p className="text-lg">Home</p>
                </div>

            </NavLink>
        </li>
      


    </>


    return (
        <div className="drawer lg:drawer-open sticky top-0 h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to='/' className="flex items-center gap-4 p-4">
                            <div className="">
                                {/* <img src={logo} alt="" className="w-10" /> */}
                            </div>
                            <p className="text-2xl font-bold cinzel">Bistro Boss<br />Restaurent</p>
                        </NavLink>
                    </li>
                    {sidebarItems}
                    {sharedNavItems}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar