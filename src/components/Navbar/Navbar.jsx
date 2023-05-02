/* import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-slate-950 bg-lime-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-gray-900 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Fooden</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive && "bg-red-700 text-white px-3 py-1 rounded-md"
            }
          >
            <span className="mr-5">Home</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive && "bg-red-700 text-white px-3 py-1 rounded-md"
            }
          >
            Profile
          </NavLink>
          <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive && "bg-red-700 text-white px-3 py-1 rounded-md"
            }
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
 */

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleSignOut = ()=>{
        logOut()
        .then(()=>{
            toast.success('Sing out successful')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    };

  return (
    <div>
      <div className="navbar bg-amber-400 shadow-lg lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <Link to="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/profile">
                <li>
                  <a>Profile</a>
                </li>
              </Link>
              <Link to="/login">
                <li>
                  <a>Login</a>
                </li>
              </Link>

              
              <Link to="/blogs">
                <li>
                  <a>Blogs</a>
                </li>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-2xl">
            Fooden
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li className="mr-9">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Home
              </NavLink>
            </li>

             {
                user && user ? 
                <>
                <li className="mr-9">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li className="mr-9">
              <NavLink onClick={handleSignOut}
                to="/login"
                className= {({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Logout
              </NavLink>
              </li>
              </> : 
              <>
              <li className="mr-9">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                  }
                >
                  Login
                </NavLink>
              </li>
              </>
             }

            <li className="mr-9">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive && "bg-cyan-300 text-black px-3 py-1 rounded-md"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
