import { Icon } from '@iconify/react';
import styles from './styles.module.scss';
import AirbnbSearch from '../AirbnbSearch';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const userDropdownRef = useRef<HTMLInputElement>(null);

  const [changeStyle, setChangeStyle] = useState(false);

  const detectScroll = () => {
    if (window.scrollY > 10) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  };

  window.addEventListener('scroll', detectScroll);

  const handleClickOutsideUserDropdown = (event: Event) => {
    if (
      userDropdownRef?.current &&
      !userDropdownRef?.current?.contains(event.target as Node)
    ) {
      setShowUserDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideUserDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideUserDropdown);
    };
  }, [userDropdownRef]);

  return (
    <nav
      className={`border-b px-10 lg:px-20 py-5 pt-4 fixed z-10 bg-white right-0 w-full transition-all duration-300 ${
        changeStyle ? 'h-24' : 'h-24 lg:h-44'
      }`}
    >
      <div className="flex justify-between lg:grid lg:grid-cols-3 items-center">
        <a href="/" className="hidden sm:block justify-self-start">
          <div className="flex items-center">
            <Icon
              icon="logos:airbnb-icon"
              width="32"
              height="32"
              className="mr-1"
            />
            <span className="text-airbnbRed font-semibold text-xl tracking-tight font-poppins">
              airbnb
            </span>
          </div>
        </a>

        <div className="sm:hidden w-full shadow-md rounded-full border overflow-hidden pr-5 pl-10 py-1 relative mt-1">
          <Icon
            icon="tabler:search"
            width="20"
            height="20"
            className="absolute left-3 bottom-4"
          />
          <p className="text-sm">Where to?</p>
          <input
            type="text"
            placeholder="Anywhere . Any week . Add guests"
            className="w-full placeholder:text-xs outline-none"
          />
        </div>

        <ul
          className={`hidden text-sm xl:text-base lg:flex space-x-8s text-airbnbGrey justify-self-center font-light transition-all duration-300 ${
            changeStyle ? 'hide-nav-ul' : ''
          }`}
        >
          <li
            className={`${styles.active} cursor-pointer px-4 py-3 rounded-full hover:bg-airbnbGrey3 hover:text-black`}
          >
            Stays
          </li>
          <li className="cursor-pointer px-4 py-3 rounded-full hover:bg-airbnbGrey3 hover:text-black">
            Experiences
          </li>
          <li className="cursor-pointer px-4 py-3 rounded-full hover:bg-airbnbGrey3 hover:text-black">
            Online Experiences
          </li>
        </ul>

        <div className="hidden sm:flex items-center space-x-3 justify-self-end">
          <p className="hidden lg:block text-sm cursor-pointer font-medium p-3 rounded-full hover:bg-airbnbGrey3">
            Airbnb your home
          </p>

          <span className="p-3 rounded-full hover:bg-airbnbGrey3">
            <Icon
              icon="ph:globe-light"
              width="20"
              height="20"
              className="cursor-pointer"
            />
          </span>

          <div className="relative" ref={userDropdownRef}>
            <div
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center space-x-3 border border-airbnbGrey2 p-2 rounded-full cursor-pointer hover:shadow-md"
            >
              <Icon icon="solar:hamburger-menu-linear" width="20" height="20" />
              <Icon
                icon="fa6-solid:circle-user"
                width="30"
                height="30"
                className="text-airbnbGrey"
              />
            </div>

            <div
              className={`border absolute z-10 bg-white top-14 right-0 rounded-lg shadow-md whitespace-nowrap text-sm ${
                showUserDropdown ? '' : 'hidden'
              }`}
            >
              <ul className="p-5 border-b pr-24">
                <li className="pb-3 font-semibold">Sign up</li>
                <li className="pb-3">Log in</li>
              </ul>

              <ul className="p-5 pr-24">
                <li className="pb-3">Gift cards</li>
                <li className="pb-3">Airbnb your home</li>
                <li className="pb-3">Help Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <AirbnbSearch />
      </div>
    </nav>
  );
};

export default Navbar;
