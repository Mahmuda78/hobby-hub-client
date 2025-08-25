import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {

  const { user, logOut } = use(AuthContext);

  const link = ({ isActive }) =>
    isActive
      ? "text-[#FD6E0A] font-semibold"
      : "hover:text-[#FD6E0A] font-semibold";

  const links = (
    <>
      <li>
        <NavLink to="/" className={link}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/groups" className={link}>
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink to="/createGroup" className={link}>
          Create Group
        </NavLink>
      </li>
      <li>
        <NavLink to="/myGroups" className={link}>
          My Groups
        </NavLink>
      </li>
    </>
  );

  
  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        toast("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-black text-white shadow-sm px-4">
     
      <div className="navbar-start">
       
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        
        <a className="text-2xl font-bold text-[#FD6E0A]">
          Hobby<span className="text-white">Hub</span>
        </a>
      </div>

      {/* Navbar Center (large devices) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
     <div className="navbar-end">
  {!user ? (
    <Link
      to="/login"
      className="btn bg-[#FD6E0A] border-none hover:bg-[#e55e00] text-white"
    >
      Login
    </Link>
  ) : (
    <div className="flex items-center gap-3">
      {/* Tooltip on hover */}
      <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
        <div className="w-10 rounded-full border-2 border-[#FD6E0A]">
          <img className='rounded-full' src={user.photoURL} alt="user" />
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogOut}
        className="btn bg-[#FD6E0A] border-none hover:bg-[#e55e00] text-white"
      >
        Logout
      </button>
    </div>
  )}
</div>

    </div>
  );
};

export default Header;
