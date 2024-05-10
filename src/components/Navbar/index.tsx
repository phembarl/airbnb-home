import { Icon } from '@iconify/react';
import styles from './styles.module.scss';
import AirbnbSearch from '../AirbnbSearch';

const Navbar = () => {
  return (
    <nav className="border-b px-20 py-5 pt-4">
      <div className="grid grid-cols-3 items-center">
        <a href="/">
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

        <ul className="flex space-x-8s text-airbnbGrey justify-self-center font-light">
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

        <div className="flex items-center space-x-3 justify-self-end">
          <p className="text-sm cursor-pointer font-medium p-3 rounded-full hover:bg-airbnbGrey3">
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

          <div className="flex items-center space-x-3 border border-airbnbGrey2 p-2 rounded-full cursor-pointer hover:shadow-md">
            <Icon icon="solar:hamburger-menu-linear" width="20" height="20" />
            <Icon
              icon="fa6-solid:circle-user"
              width="30"
              height="30"
              className="text-airbnbGrey"
            />
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
