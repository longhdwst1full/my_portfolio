import React from "react";
import {navDetail } from "../api/data";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 py-4  font-bold bg-white text-black w-full  m-auto shadow-[#92a1b04d] z-40">
      <div className="w-[1200px] shadow-[#92a1b04d] m-auto flex justify-between ">
        <div>
          <a href=""> HDL</a>
        </div>
        <nav className="flex list-none ">
          {navDetail.map((item) => (
            <li key={item.name} className="ml-6">
              <a
                className="py-1.5 text-[#0e2431] text-lg font-semibold tracking-[0.04rem]  "
                href="#"
              >
                {item.name}
              </a>
            </li>
          ))}
         
        </nav>
      </div>
    </div>
  );
};

export default Header;
