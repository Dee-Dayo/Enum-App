'use client'

import { FC, useState } from 'react';
import Image from 'next/image';

const Sidebar: FC = () => {
  const [activeOption, setActiveOption] = useState('cohorts');

  const handleClick = (option: string) => {
    setActiveOption(option);
  };

  const getOptionClass = (option: string) => {
    return activeOption === option
      ? 'bg-customLightBlue text-customBlue font-semibold rounded-full'
      : 'text-gray-600';
  };

  return (
    <div className="flex flex-col px-12 py-10 h-full">
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
  );
};

export default Sidebar;
