import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Place, categories, createRandomPlace } from '../../utils/data';
import ScrollArrow from '../../components/ScrollArrow';
import LocationCard from '../../components/LocationCard';
import ToggleBtn from '../../components/ToggleBtn';

const Homepage = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

  const [activeTab, setActiveTab] = useState('Icons');

  const ITEM_WIDTH = 800;

  const scrollContainerRef = useRef<HTMLInputElement>(null);

  const handleScroll = (scrollAmount: number) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (scrollPosition >= 0) {
      setScrollPosition(newScrollPosition);
    }
    scrollContainerRef.current!.scrollLeft = newScrollPosition;
    console.log(scrollContainerRef.current?.scrollLeft);
  };

  useEffect(() => {
    const newPlaces = faker.helpers.multiple(createRandomPlace, {
      count: 50,
    });

    setPlaces(newPlaces);
  }, [activeTab]);

  return (
    <div className="px-20 py-5">
      <div className="flex justify-between items-start">
        <div className="relative w-9/12">
          <div
            className="text-airbnbGrey flex space-x-16 overflow-x-scroll no-scrollbar scroll-smooth"
            ref={scrollContainerRef}
          >
            {categories.map(cat => (
              <div
                className={`cursor-pointer text-center hover:text-black hover:border-b-2 ${
                  activeTab === cat.title
                    ? 'pb-2 border-b-2 border-black text-black'
                    : ''
                }`}
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
              >
                <div className="flex justify-center">
                  <Icon icon={cat.iconName} width="30" height="30" />
                </div>
                <p className="text-xs whitespace-nowrap mt-1">{cat.title}</p>
              </div>
            ))}

            {scrollPosition > 0 && (
              <div
                onClick={() => handleScroll(-ITEM_WIDTH)}
                className={`absolute top-0 -left-16 bg-white w-10 h-12`}
              >
                <ScrollArrow direction="left" className="mt-3" />
              </div>
            )}

            <div
              onClick={() => handleScroll(+ITEM_WIDTH)}
              className="absolute top-0 right-0 bg-white w-10 h-12"
            >
              <ScrollArrow direction="right" className="mt-3" />
            </div>
          </div>
        </div>

        <button className="flex text-sm border p-3 rounded-lg border-airbnbGrey2 hover:border-black hover:bg-airbnbGrey3">
          <Icon icon="mage:filter" width="20" height="20" className="mr-2" />
          <span>Filters</span>
        </button>

        <div className="flex text-sm border px-3 py-[0.61rem] rounded-lg border-airbnbGrey2 hover:border-black hover:bg-airbnbGrey3">
          <span className="mr-2">Display total before taxes</span>
          <ToggleBtn
            checked={showTotalPrice}
            onChange={() => setShowTotalPrice(!showTotalPrice)}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-5">
        {places.map(place => (
          <LocationCard
            key={uuidv4()}
            images={place.images}
            location={place.location}
            distance={place.distance}
            datePeriod={place.datePeriod}
            price={showTotalPrice ? place.totalPriceBeforeTaxes : place.price}
            guestFavorite={place.guestFavorite}
            rating={place.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
