import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Getaway, createRandomGetaways } from '../../utils/data';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [getaways, setGetaways] = useState<Getaway[]>([]);
  const [activeTab, setActiveTab] = useState('Popular');

  const tabs = [
    'Popular',
    'Arts & Culture',
    'Outdoors',
    'Mountains',
    'Beach',
    'Unique stays',
    'Categories',
    'Things to do',
    'Travel tips & inspiration',
    'Airbnb-friendly apartments',
  ];

  useEffect(() => {
    const newGetaways = faker.helpers.multiple(createRandomGetaways, {
      count: 18,
    });

    setGetaways(newGetaways);
  }, [activeTab]);

  return (
    <div className="bg-airbnbGrey4 mt-10">
      <div className="px-20 pb-5 pt-10 border-b">
        <h2 className="text-2xl">Inspiration for future getaways</h2>
        <ul className="flex mt-5 space-x-8 text-airbnbGrey border-b overflow-x-scroll no-scrollbar whitespace-nowrap">
          {tabs.map((tab, i: number) => (
            <li
              key={uuidv4()}
              className={`cursor-pointer ${
                activeTab === tab
                  ? 'pb-2 border-b-2 border-black text-black'
                  : ''
              }`}
              onClick={() => setActiveTab(tab)}
              data-testid={`footer-tab-[${i}]`}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] gap-7 text-sm">
          {getaways.map(ga => (
            <span className="cursor-pointer">
              <p className="font-medium">{ga.city}</p>
              <p className="capitalize text-airbnbGrey">{ga.description}</p>
            </span>
          ))}
        </div>
      </div>

      <div className="px-20 pb-5 pt-10">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-7 text-sm border-b">
          <ul>
            <li className="font-medium pb-5">Support</li>
            <li className="pb-5 cursor-pointer hover:underline">Help Center</li>
            <li className="pb-5 cursor-pointer hover:underline">AirCover</li>
            <li className="pb-5 cursor-pointer hover:underline">
              Anti-discrimination
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Disability support
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Cancellation options
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Report neighborhood concern
            </li>
          </ul>
          <ul>
            <li className="font-medium pb-5">Hosting</li>
            <li className="pb-5 cursor-pointer hover:underline">
              Airbnb your home
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              AirCover for Hosts
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Hosting resources
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Community forum
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Hosting responsibly
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Airbnb-friendly apartments
            </li>
            <li className="pb-5 cursor-pointer hover:underline">
              Join a free Hosting class
            </li>
          </ul>

          <ul>
            <li className="font-medium pb-5">Airbnb</li>
            <li className="pb-5 cursor-pointer hover:underline">Newsroom</li>
            <li className="pb-5 cursor-pointer hover:underline">
              New features
            </li>
            <li className="pb-5 cursor-pointer hover:underline">Careers</li>
            <li className="pb-5 cursor-pointer hover:underline">Investors</li>
            <li className="pb-5 cursor-pointer hover:underline">Gift cards</li>
            <li className="pb-5 cursor-pointer hover:underline">
              Airbnb.org emergency stays
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
          <ul className="text-sm flex flex-col lg:flex-row lg:space-x-5 space-y-2 lg:space-y-0 pt-5">
            <li>© 2024 Airbnb, Inc. .</li>
            <li className="cursor-pointer hover:underline">Terms .</li>
            <li className="cursor-pointer hover:underline">Sitemap .</li>
            <li className="cursor-pointer hover:underline">Privacy .</li>
            <li className="cursor-pointer hover:underline">
              Your Privacy Choices
            </li>
          </ul>

          <div className="flex items-end space-x-5 text-sm mt-2 lg:mt-0">
            <p className="flex items-center space-x-2">
              {' '}
              <Icon
                icon="ph:globe-light"
                width="20"
                height="20"
                className="cursor-pointer"
              />{' '}
              <span>English(US)</span>
            </p>
            <p>$ USD</p>

            <div className="flex space-x-3">
              <Icon icon="ant-design:facebook-filled" width="24" height="24" />
              <Icon
                icon="ant-design:twitter-square-filled"
                width="24"
                height="24"
              />
              <Icon icon="ant-design:instagram-filled" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
