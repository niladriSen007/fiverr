import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0
      ? (setActive(true), setShowUserOptions(false))
      : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: "1",
    userName: "Emma",
    isSeller: true,
  };

  return (
    <>
      <div
        className={`${
          active || pathname !== "/" ? "activeScroll" : "inActiveScroll"
        } sticky transition-all duration-300 ease-in-out 
        flex justify-between items-center w-full px-64 top-0 h-16 z-20`}
      >
        <div>
          <h3 className="text-3xl font-extrabold">
            <Link to={"/"}>fiverr.</Link>
          </h3>
        </div>
        <div className=" flex gap-6 items-center font-semibold">
          <span className="cursor-pointer">Fiver Business</span>
          <span className="cursor-pointer">Explore</span>
          <span className="cursor-pointer">English</span>
          {!currentUser?.isSeller && (
            <span className="cursor-pointer">Become a Seller</span>
          )}
          <Link to={"/login"} className="cursor-pointer">
            Sign In
          </Link>
          {!currentUser?.isSeller && (
            <span
              className={`border-2 ${
                active ? "border-black" : "border-white"
              } px-2 hover:bg-green-500 cursor-pointer`}
            >
              Join
            </span>
          )}
          {currentUser && (
            <div className="user flex gap-2 items-center relative">
              <img
                className="w-8 h-8 object-cover rounded-full "
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <span
                onClick={() => setShowUserOptions((prev) => !prev)}
                className="cursor-pointer"
              >
                {currentUser.userName}
              </span>
              {showUserOptions && (
                <div className=" border-gray-700 options flex flex-col gap-3 absolute bg-gray-200 text-black text-xs top-10 p-4 w-32 rounded shadow-xl right-8 z-50">
                  {currentUser.isSeller && (
                    <>
                      <Link
                        to="/mygigs"
                        onClick={() => setShowUserOptions(false)}
                      >
                        Gigs
                      </Link>
                      <Link to="/add" onClick={() => setShowUserOptions(false)}>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" onClick={() => setShowUserOptions(false)}>
                    Orders
                  </Link>
                  <Link
                    to="/messages"
                    onClick={() => setShowUserOptions(false)}
                  >
                    Messages
                  </Link>
                  <Link to="/" onClick={() => setShowUserOptions(false)}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <div className="text-gray-600 bg-white  px-64 flex items-center justify-between text-xs py-2 shadow-md sticky top-16 z-20 ">
          <span className="cursor-pointer">Graphics & Design</span>
          <span className="cursor-pointer">Video & Animation</span>
          <span className="cursor-pointer">Writing & Transition</span>
          <span className="cursor-pointer">All Services</span>
          <span className="cursor-pointer">Digital Marketing</span>
          <span className="cursor-pointer">Music & Audio</span>
          <span className="cursor-pointer">Programming & Tech</span>
          <span className="cursor-pointer">Business</span>
          <span className="cursor-pointer">Lifestyle</span>
        </div>
      )}
    </>
  );
};

export default Navbar;
