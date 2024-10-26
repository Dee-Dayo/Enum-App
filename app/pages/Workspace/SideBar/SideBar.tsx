'use client'

import { FC, useState } from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react';

interface SidebarProps {
  onOptionChange: (option: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ onOptionChange }) => {
  const [activeOption, setActiveOption] = useState('cohorts');

  const handleClick = (option: string) => {
    setActiveOption(option);
    onOptionChange(option);
  };

  const getOptionClass = (option: string) => {
    return activeOption === option
      ? 'bg-customLightBlue text-customBlue font-semibold rounded-full'
      : 'text-gray-600';
  };

  return (
    <div className="flex flex-col px-12 py-10 h-full">
      <div className="hidden md:flex flex-col">
        <div
          className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('cohorts')}`}
          onClick={() => handleClick('cohorts')}
        >
          <Image
            src="/users.png"
            alt="Cohorts Icon"
            width={20}
            height={20}
            className={activeOption === 'cohorts' ? 'text-customBlue' : 'text-gray-600'}
          />
          <span className="ml-2">Cohorts</span>
        </div>
        <div
          className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('programs')}`}
          onClick={() => handleClick('programs')}
        >
          <Image
            src="/program.png"
            alt="Programs Icon"
            width={20}
            height={20}
            className={activeOption === 'programs' ? 'text-customBlue' : 'text-gray-600'}
          />
          <span className="ml-2">Programs</span>
        </div>
        <div
          className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('instructors')}`}
          onClick={() => handleClick('instructors')}
        >
          <Image
            src="/instructors.png"
            alt="Instructors Icon"
            width={20}
            height={20}
            className={activeOption === 'instructors' ? 'text-customBlue' : 'text-gray-600'}
          />
          <span className="ml-2">Instructors</span>
        </div>
        <div
          className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('learners')}`}
          onClick={() => handleClick('learners')}
        >
          <Image
            src="/user.png"
            alt="Learners Icon"
            width={20}
            height={20}
            className={activeOption === 'learners' ? 'text-customBlue' : 'text-gray-600'}
          />
          <span className="ml-2">Learners</span>
        </div>
      </div>
      <div className="md:hidden">
        <div className="text-gray-700 mb-2">Switch between tabs</div>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Select an option
          </Menu.Button>
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex items-center px-4 py-2 text-sm rounded-md`}
                    onClick={() => handleClick('cohorts')}
                  >
                    <Image
                      src="/users.png"
                      alt="Cohorts Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Cohorts
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex items-center px-4 py-2 text-sm rounded-md`}
                    onClick={() => handleClick('programs')}
                  >
                    <Image
                      src="/program.png"
                      alt="Programs Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Programs
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex items-center px-4 py-2 text-sm rounded-md`}
                    onClick={() => handleClick('instructors')}
                  >
                    <Image
                      src="/instructors.png"
                      alt="Instructors Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Instructors
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex items-center px-4 py-2 text-sm rounded-md`}
                    onClick={() => handleClick('learners')}
                  >
                    <Image
                      src="/user.png"
                      alt="Learners Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Learners
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
