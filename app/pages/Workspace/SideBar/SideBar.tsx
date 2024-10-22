'use client'

import { FC, useState } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Assignment, Person } from '@mui/icons-material';

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
    <div className="flex flex-col px-12 py-10 bg-gray-100 h-full">
      <div
        className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('cohorts')}`}
        onClick={() => handleClick('cohorts')}
      >
        <PeopleAltOutlinedIcon className={activeOption === 'cohorts' ? 'text-customBlue' : 'text-gray-600'} />
        <span className="ml-2">Cohorts</span>
      </div>
      <div
        className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('programs')}`}
        onClick={() => handleClick('programs')}
      >
        <Assignment className={activeOption === 'programs' ? 'text-customBlue' : 'text-gray-600'} />
        <span className="ml-2">Programs</span>
      </div>
      <div
        className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('instructors')}`}
        onClick={() => handleClick('instructors')}
      >
        <Person className={activeOption === 'instructors' ? 'text-customBlue' : 'text-gray-600'} />
        <span className="ml-2">Instructors</span>
      </div>
      <div
        className={`flex items-center mb-4 cursor-pointer w-48 p-2 ${getOptionClass('learners')}`}
        onClick={() => handleClick('learners')}
      >
        <PersonOutlinedIcon className={activeOption === 'learners' ? 'text-customBlue' : 'text-gray-600'} />
        <span className="ml-2">Learners</span>
      </div>
    </div>
  );
};

export default Sidebar;
