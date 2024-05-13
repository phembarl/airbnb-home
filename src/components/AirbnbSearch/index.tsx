import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { DateRangePicker } from 'rsuite';
import styles from './styles.module.scss';
import 'rsuite/DateRangePicker/styles/index.css';

const AirbnbSearch = () => {
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [expandSearch, setExpandSearch] = useState(false);

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const [changeStyle, setChangeStyle] = useState(false);

  const detectScroll = () => {
    if (window.scrollY > 10) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  };

  window.addEventListener('scroll', detectScroll);

  const totalGuests = adults + children + infants + pets;

  const clearGuests = () => {
    setAdults(0);
    setChildren(0);
    setInfants(0);
    setPets(0);
  };

  const guestDropdownRef = useRef<HTMLInputElement>(null);

  const handleClickOutsideGuestDropdown = (event: Event) => {
    if (
      guestDropdownRef?.current &&
      !guestDropdownRef?.current?.contains(event.target as Node)
    ) {
      setShowGuestDropdown(false);
      setExpandSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideGuestDropdown);
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutsideGuestDropdown
      );
    };
  }, [guestDropdownRef]);
  return (
    <div className="hidden lg:block relative">
      <div
        className={`text-sm flex mt-5 border border-airbnbGrey2 shadow-md rounded-full leading-6 overflow-hidden transition-all duration-300 ${
          changeStyle ? 'small-search' : ''
        }`}
      >
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
          <span className="relative">
            <p className="text-xs font-medium">Check in</p>
            <DateRangePicker format="MMM dd, yyyy" />
            <p className="text-airbnbGrey font-light">Add dates</p>
          </span>
        </div>

        <div
          className={`pl-6 py-3 pr-20 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderAfter} ${styles.searchSectionBorderBefore}`}
        >
          <p className="text-xs font-medium">Check out</p>
          <p className="text-airbnbGrey font-light">Add dates</p>
        </div>

        <div
          onClick={() => {
            setShowGuestDropdown(!showGuestDropdown);
            setExpandSearch(true);
          }}
          className={`flex pl-6 py-3 pr-44 cursor-pointer hover:bg-airbnbGrey3 hover:rounded-full relative ${styles.searchSectionBorderBefore}`}
        >
          <span>
            <p className="text-xs font-medium">Who</p>
            {!totalGuests ? (
              <p className="text-airbnbGrey font-light">Add guests</p>
            ) : (
              <p className="font-medium relative">
                {totalGuests} {totalGuests > 1 ? 'guests' : 'guest'}
                <button
                  className="absolute left-14 bottom-3 cursor-pointer bg-airbnbGrey2 rounded-full p-[0.1rem]"
                  onClick={clearGuests}
                >
                  <Icon icon="iconoir:cancel" width="16" height="16" />
                </button>
              </p>
            )}
          </span>

          <span
            className={`text-white bg-airbnbRed p-4 rounded-full absolute right-2 bottom-[10%] transition-all ${
              expandSearch
                ? 'flex space-x-3 text-base items-center top-2 w-32'
                : 'w-[3.1rem] h-[3.1rem] flex justify-center items-center'
            }`}
          >
            <Icon icon="tabler:search" width="20" height="20" />
            <span className={`${expandSearch ? '' : 'hidden'}`}>Search</span>
          </span>
        </div>
      </div>

      {/* small search */}
      <div className="hidden lg:flex justify-center items-center">
        <div
          className={`text-sm inline-flex border border-airbnbGrey2 shadow-md rounded-full leading-6 overflow-hidden transition-all duration-300 -mt-16 -z-10 opacity-0 ${
            changeStyle ? 'big-search' : ''
          }`}
        >
          <div
            className={`px-6 py-3 cursor-pointer relative ${styles.searchSectionBorderAfter}`}
          >
            <p className="font-medium">Anywhere</p>
          </div>

          <div
            className={`px-6 py-3 cursor-pointer relative ${styles.searchSectionBorderAfter} ${styles.searchSectionBorderBefore}`}
          >
            <p className="font-medium">Any week</p>
          </div>

          <div
            className={`flex px-6 py-3 pr-16 cursor-pointer relative ${styles.searchSectionBorderBefore}`}
          >
            <span>
              <p className="text-airbnbGrey font-light">Add guests</p>
            </span>

            <span className="text-white bg-airbnbRed p-2 rounded-full absolute right-2 bottom-[10%] transition-all">
              <Icon icon="tabler:search" width="20" height="20" />
            </span>
          </div>
        </div>
      </div>
      {/* ---------------- */}

      <div
        ref={guestDropdownRef}
        className={`bg-white border rounded-3xl shadow-md p-10 absolute right-0 top-[6.15rem] w-[26rem] ${
          showGuestDropdown ? '' : 'hidden'
        }`}
      >
        <div className="flex justify-between items-center border-b pb-5">
          <div>
            <p className="font-medium pb-1">Adults</p>
            <p className="text-sm text-airbnbGrey">Ages 13 or above</p>
          </div>

          <div className="flex space-x-5 items-center">
            <button
              onClick={() => {
                if (adults !== 0) setAdults(adults - 1);
              }}
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1 disabled:text-airbnbGrey2 disabled:border-airbnbGrey2"
              disabled={adults === 0}
            >
              <Icon icon="bi:dash" width="24" height="24" />
            </button>
            <p>{adults}</p>
            <button
              onClick={() => {
                setAdults(adults + 1);
              }}
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1"
            >
              <Icon icon="bi:plus" width="24" height="24" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-5 pt-5">
          <div>
            <p className="font-medium pb-1">Children</p>
            <p className="text-sm text-airbnbGrey">Ages 2 or 12</p>
          </div>

          <div className="flex space-x-5 items-center">
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1 disabled:text-airbnbGrey2 disabled:border-airbnbGrey2"
              disabled={children === 0}
              onClick={() => {
                if (children !== 0) setChildren(children - 1);
              }}
            >
              <Icon icon="bi:dash" width="24" height="24" />
            </button>
            <p>{children}</p>
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1"
              onClick={() => {
                setChildren(children + 1);
              }}
            >
              <Icon icon="bi:plus" width="24" height="24" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-5 pt-5">
          <div>
            <p className="font-medium pb-1">Infants</p>
            <p className="text-sm text-airbnbGrey">Under 2</p>
          </div>

          <div className="flex space-x-5 items-center">
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1 disabled:text-airbnbGrey2 disabled:border-airbnbGrey2"
              disabled={infants === 0}
              onClick={() => {
                if (infants !== 0) setInfants(infants - 1);
              }}
            >
              <Icon icon="bi:dash" width="24" height="24" />
            </button>
            <p>{infants}</p>
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1"
              onClick={() => {
                setInfants(infants + 1);
              }}
            >
              <Icon icon="bi:plus" width="24" height="24" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-5 pt-5">
          <div>
            <p className="font-medium pb-1">Pets</p>
            <p className="text-sm text-airbnbGrey underline">
              Bring a service animal?
            </p>
          </div>

          <div className="flex space-x-5 items-center">
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1 disabled:text-airbnbGrey2 disabled:border-airbnbGrey2"
              disabled={pets === 0}
              onClick={() => {
                if (pets !== 0) setPets(pets - 1);
              }}
            >
              <Icon icon="bi:dash" width="24" height="24" />
            </button>
            <p>{pets}</p>
            <button
              className="border border-airbnbGrey text-airbnbGrey rounded-full p-1"
              onClick={() => {
                setPets(pets + 1);
              }}
            >
              <Icon icon="bi:plus" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirbnbSearch;
