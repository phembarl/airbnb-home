import { faker } from '@faker-js/faker';

interface Category {
  iconName: string;
  title: string;
}

export const categories: Category[] = [
  {
    iconName: 'zondicons:ticket',
    title: 'Icons',
  },
  {
    iconName: 'ph:park-light',
    title: 'National parks',
  },
  {
    iconName: 'tdesign:image-1',
    title: 'Amazing views',
  },
  {
    iconName: 'solar:ufo-linear',
    title: 'OMG!',
  },
  {
    iconName: 'ph:island',
    title: 'Islands',
  },
  {
    iconName: 'mingcute:house-line',
    title: 'Design',
  },
  {
    iconName: 'ion:bed-outline',
    title: 'Rooms',
  },
  {
    iconName: 'solar:tea-cup-linear',
    title: 'Bed & Breakfast',
  },
  {
    iconName: 'ph:sailboat',
    title: 'Boats',
  },
  {
    iconName: 'fluent:swimming-pool-48-regular',
    title: 'Amazing pools',
  },
  {
    iconName: 'tdesign:houses-1',
    title: 'Mansions',
  },
  {
    iconName: 'guidance:bowling',
    title: 'Play',
  },
  {
    iconName: 'game-icons:star-key',
    title: 'New',
  },
  {
    iconName: 'solar:fire-outline',
    title: 'Trending',
  },
  {
    iconName: 'iconoir:snow-flake',
    title: 'Arctic',
  },
];

export interface Place {
  images: string[];
  location: string;
  distance: string;
  datePeriod: string;
  price: string;
  totalPriceBeforeTaxes: string;
  guestFavorite: boolean;
  rating: number;
}

const createRandomImage = () => {
  return faker.image.urlPicsumPhotos();
};

export const createRandomPlace = (): Place => {
  const monthDate = faker.number.int(15);
  return {
    images: faker.helpers.multiple(createRandomImage, {
      count: 5,
    }),
    location: `${faker.location.city()}, ${faker.location.country()}`,
    distance: `${faker.number.int(50)} miles to ${faker.location.county()}`,
    datePeriod: `${faker.date.month()} ${monthDate} - ${monthDate + 5}`,
    price: `$${faker.number.int({
      min: 90,
      max: 100,
    })}`,
    totalPriceBeforeTaxes: `$${faker.number.int(5000).toLocaleString()}`,
    guestFavorite: faker.datatype.boolean(0.4),
    rating: faker.number.float({
      min: 3,
      max: 5,
      fractionDigits: 2,
    }),
  };
};

export interface Getaway {
  city: string;
  description: string;
}

export const createRandomGetaways = (): Getaway => {
  return {
    city: faker.location.city(),
    description: `${faker.lorem.word()} rentals`,
  };
};
