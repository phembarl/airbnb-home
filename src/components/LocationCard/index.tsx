import { Icon } from '@iconify/react';

import Heart from '../../assets/heart.png';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';

export interface LocationPlace {
  images: string[];
  location: string;
  distance: string;
  datePeriod: string;
  price: string;
  guestFavorite: boolean;
  rating: number;
}

const LocationCard = ({
  images,
  location,
  distance,
  datePeriod,
  price,
  guestFavorite,
  rating,
}: LocationPlace) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-80 cursor-pointer justify-self-center">
      <div className="rounded-xl overflow-hidden relative">
        <div className="slider-container w-full h-80">
          <Slider {...settings}>
            {images.map(image => (
              <img
                key={uuidv4()}
                src={image}
                alt=""
                className="w-full h-80 object-cover"
              />
            ))}
          </Slider>
        </div>

        <img
          src={Heart}
          alt=""
          className="absolute top-3 right-3 text-white w-6 hover:scale-[1.1] transition-all"
        />

        {guestFavorite && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-sm font-medium">
            <p>Guest favorite</p>
          </div>
        )}
      </div>

      <div className="flex justify-between text-[0.9375rem] mt-3">
        <span>
          <p className="font-medium">{location}</p>
          <p className="font-thin">{distance}</p>
          <p className="font-thin">{datePeriod}</p>
          <p>
            <span className="font-medium">{price}</span> night
          </p>
        </span>

        <span className="flex">
          <Icon icon="ic:round-star" width="20" height="20" />
          <span className="font-light">{rating}</span>
        </span>
      </div>
    </div>
  );
};

export default LocationCard;
