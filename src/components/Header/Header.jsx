import React from "react";
import developerImg from '../../assets/img/developer.png'
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container mx-auto p-5">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="font-bold text-3xl">Technology Hub</a>
          </div>
          <div className="flex-none">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={developerImg} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <hr />
      </div>
    </div>
  );
};

export default Header;
