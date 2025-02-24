import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import ContentLoader from 'react-content-loader';
import { Place, categories, createRandomPlace } from '../../utils/data';
import ScrollArrow from '../../components/ScrollArrow';
import LocationCard from '../../components/LocationCard';
import ToggleBtn from '../../components/ToggleBtn';

const Homepage = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const [changeStyle, setChangeStyle] = useState(false);

  const detectScroll = () => {
    if (window.scrollY > 10) {
      setChangeStyle(true);
    } else {
      setChangeStyle(false);
    }
  };

  window.addEventListener('scroll', detectScroll);

  useEffect(() => {
    setLoading(true);

    const newPlaces = faker.helpers.multiple(createRandomPlace, {
      count: 50,
    });

    setPlaces(newPlaces);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [activeTab]);

  return (
    <div className="px-10 lg:px-20 py-5">
      <div
        className={`px-10 lg:px-20 py-5 flex justify-between items-start fixed bg-white z-[2] right-0 w-full h-24 transition-all duration-300 ${
          changeStyle ? 'top-24' : 'top-24 lg:top-44'
        }`}
      >
        <div className="relative w-full xl:w-9/12">
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

        <button className="hidden xl:flex text-sm border p-3 rounded-lg border-airbnbGrey2 hover:border-black bg-white hover:bg-airbnbGrey3">
          <Icon icon="mage:filter" width="20" height="20" className="mr-2" />
          <span>Filters</span>
        </button>

        <div className="hidden xl:flex text-sm border px-3 py-[0.61rem] rounded-lg border-airbnbGrey2 hover:border-black bg-white hover:bg-airbnbGrey3 whitespace-nowrap">
          <span className="mr-2">Display total before taxes</span>
          <ToggleBtn
            checked={showTotalPrice}
            onChange={() => setShowTotalPrice(!showTotalPrice)}
          />
        </div>
      </div>

      <div className="mt-[17rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-5">
        {places.map(place => (
          <>
            {loading ? (
              <ContentLoader viewBox="0 0 500 450" height={450} width={500}>
                <rect x="3" y="3" rx="10" ry="10" className="w-80 h-80" />
                <rect x="6" y="340" rx="0" ry="0" width="292" height="20" />
                <rect x="4" y="365" rx="0" ry="0" width="239" height="20" />
                <rect x="4" y="390" rx="0" ry="0" width="215" height="20" />
                <rect x="4" y="415" rx="0" ry="0" width="208" height="20" />
              </ContentLoader>
            ) : (
              <LocationCard
                key={uuidv4()}
                images={place.images}
                location={place.location}
                distance={place.distance}
                datePeriod={place.datePeriod}
                price={
                  showTotalPrice ? place.totalPriceBeforeTaxes : place.price
                }
                guestFavorite={place.guestFavorite}
                rating={place.rating}
                showTotalPrice={showTotalPrice}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
