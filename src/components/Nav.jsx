import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../data';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [navMobile, setNavMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="relative top-0 z-50 w-full bg-[rgba(22,22,22,1)]">
        <div className="flex justify-between py-1 items-center max-container pl-2 text-white">
          <Link to="/">
            <img
              src={headerLogo}
              alt="Logo"
              className="m-0 w-[100px] h-[100px]"
            />
          </Link>
          <ul className="flex-1 flex justify-end items-center gap-8 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`font-poppins text-lg text-white uppercase tracking-widest hover:text-custom-gold`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              onClick={() => setNavMobile((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>

      {navMobile && (
        <div className="relative h-full bg-custom-black text-white z-50 hidden max-lg:block">
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="font-montserrat text-lg text-white uppercase font-semibold border-t-[1px] py-4 px-6 border-t-white hover:text-custom-gold"
              >
                <Link
                  to={item.href}
                  className="w-full block"
                  onClick={() => setNavMobile(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
