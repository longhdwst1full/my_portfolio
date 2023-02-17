import { useContext, useEffect, useState } from "react";
import { AppContext } from "../content";
const Header = ({ children }) => {
  const theme = useContext(AppContext);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu(theme[0].navDetail);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 py-4  font-bold bg-white text-black w-full  m-auto shadow-[#31383e4d] shadow-2xl z-40 backdrop-blur-3xl "
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
      <div className="max-w-[1200px] shadow-[#92a1b04d] m-auto flex justify-between">
        <div>
          <a
            href=""
            className="text-3xl md:text-3xl font-medium cursor-pointer text-gradient"
            style={{
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundImage: "linear-gradient(90deg,#d65520,#0a2c9f)",
            }}
          >
            {" "}
            HĐ.LONG
          </a>
        </div>
        <nav className="flex list-none ">
          {menu &&
            menu.map((item) => (
              <li key={item.name} className="ml-6">
                <a
                  className="py-1.5 text-[#0e2431] text-lg font-semibold tracking-[0.04rem]  "
                  href={item.path}
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
