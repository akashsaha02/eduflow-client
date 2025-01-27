import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold !text-yellow-400"
              : "text-white hover:!text-yellow-400 font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:!text-yellow-400 font-medium"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold !text-yellow-400"
                : "text-white hover:!text-yellow-400 font-medium"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/teach-academix"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "text-white hover:!text-yellow-400 font-medium"
          }
        >
          Teach On Academix
        </NavLink>
      </li>


    </>
  );

  return (
    <div className="bg-dark-1 sticky top-0 w-full z-50 text-white md:py-2 bg-black bg-opacity-90 shadow-md">
      <div className="navbar mx-auto max-w-[1920px]">
        {/* Logo Section */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="navbar-center lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>

        {/* Navigation Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-6">{navItems}</ul>
        </div>

        {/* Login and Sign Up Buttons */}
        {user ? (
          <div className="navbar-end space-x-2">
            <p className="">{user.email}</p>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? " font-bold px-4 py-2 border rounded-lg bg-yellow-400 text-black border-yellow-400"
                  : " hover:!text-yellow-400 text-yellow-400 font-medium px-4 py-2 border border-yellow-400 rounded-lg"
              }
            >
              Profile
            </NavLink>
            {user.photoURL ? (<img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />) : null}
          </div>
        ) : (
          <div className="navbar-end space-x-2">
            <NavLink
              to="/login"
              className="px-4 py-2 border rounded-lg text-white hover:bg-yolo hover:border-yolo"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-yellow-400 text-gray-900 hover:bg-yolo hover:text-white border border-yellow-400 hover:border-yolo rounded-lg px-4 py-2"
            >
              Sign Up
            </NavLink>
          </div>
        )}


      </div>
    </div>
  );
};

export default Navbar;
