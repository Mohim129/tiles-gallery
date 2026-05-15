"use client";


import { signOut, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data, isPending} = useSession();
  if(isPending){
    return <div>Loading...</div>
  }
  // console.log("loging session", data)
  const user = data?.user;
    return (
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"} className="btn">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/all-tiles"} className="btn">
                    Tiles
                  </Link>
                </li>
                <li>
                  {user ? (
                    <Link href={"/my-profile"} className="btn">
                      My Profile
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
            <Link href={"/"} className="btn btn-ghost text-xl">
              Tiles Gallery
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"} className="btn">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/all-tiles"} className="btn">
                  Tiles
                </Link>
              </li>

              <li>
                {user ? (
                  <Link href={"/my-profile"} className="btn">
                    My Profile
                  </Link>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-4">
                <span>{user.name}</span>
                <button className="btn btn-ghost" onClick={() => signOut()}>
                  Logout
                </button>
              </div>
            ) : (
              <Link href={"/signin"} className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;