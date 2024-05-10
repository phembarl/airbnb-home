import { Icon } from '@iconify/react';
import styles from './styles.module.scss';

const AirbnbSearch = () => {
  return (
    <div className="text-sm flex mt-5 border border-airbnbGrey2 shadow-md rounded-full leading-6 overflow-hidden">
      <div
        className={`pl-10 py-3 pr-20 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderAfter}`}
      >
        <p className="text-xs font-medium">Where</p>
        <input
          type="text"
          placeholder="Search destinations"
          className="outline-none placeholder:text-airbnbGrey placeholder:font-light bg-transparent"
        />
      </div>

      <div
        className={`pl-6 py-3 pr-20 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderAfter} ${styles.searchSectionBorderBefore}`}
      >
        <p className="text-xs font-medium">Check in</p>
        <p className="text-airbnbGrey font-light">Add dates</p>
      </div>

      <div
        className={`pl-6 py-3 pr-20 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderAfter} ${styles.searchSectionBorderBefore}`}
      >
        <p className="text-xs font-medium">Check out</p>
        <p className="text-airbnbGrey font-light">Add dates</p>
      </div>

      <div
        className={`flex pl-6 py-3 pr-44 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderBefore}`}
      >
        <span>
          <p className="text-xs font-medium">Who</p>
          <p className="text-airbnbGrey font-light">Add guests</p>
        </span>

        <span className="text-white bg-airbnbRed p-4 rounded-full absolute right-2 bottom-[10%]">
          <Icon icon="tabler:search" width="20" height="20" />
        </span>
      </div>
    </div>
  );
};

export default AirbnbSearch;
