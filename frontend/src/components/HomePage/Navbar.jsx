import React from "react";
import logo from "../../images/acses.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-3 .fredoka-font">
      <div className="navbar-logo" class="p-5">
        <img src={logo} alt="" height={50} width={200} />
      </div>
      <div className="navbar-links mb-6 mx-5">
        <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
          <p className="mt-3">Events</p>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            <a href="#event-grid">Register</a>
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
