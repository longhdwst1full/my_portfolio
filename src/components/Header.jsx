import { useEffect, useState } from "react";
import { intance } from "../api";
const Header = ({ children }) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    intance
      .get("/navDetail")
      .then(({ data }) => data)
      .then((data) => setMenu(data));
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 py-4  font-bold bg-white text-black w-full  m-auto shadow-[#92a1b04d] z-40 backdrop-blur-3xl "  
     style={{ backdropFilter: 'blur(10px)',
    //  display: isVisible ? 'block' : 'none'
     }}>
      {children}
      <div className="max-w-[1200px] shadow-[#92a1b04d] m-auto flex justify-between ">
        <div>
          <a href=""> HDL</a>
        </div>
        <nav className="flex list-none ">
          {menu.length  &&
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
