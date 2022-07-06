import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-slate-900 p-10 items-center">
      <ul className="flex ">
        <li className="shadow-sm shadow-black hover:bg-orange-600 transition-all lg:w-80 w-32 md:w-72 h-12 p-2 cursor-pointer rounded-sm  flex justify-center items-center bg-orange-500 m-5 ">
          <Link
            className=" lg:w-80 w-32 md:w-72 h-12  flex justify-center items-center   text-white text-3xl "
            to="/"
          >
            Food
          </Link>
        </li>
        <li className="shadow-sm shadow-black hover:bg-orange-600 transition-all lg:w-80 w-32 md:w-72 p-2 h-12 cursor-pointer  flex justify-center items-center rounded-sm text-center m-5 bg-orange-500 ">
          <Link
            className=" lg:w-80 w-32  md:w-72 h-12 flex justify-center items-center  text-white text-3xl "
            to="/Order"
          >
            Order
          </Link>
        </li>
      </ul>
    </div>
  );
}
