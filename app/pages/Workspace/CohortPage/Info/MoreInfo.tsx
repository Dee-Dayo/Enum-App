'use client'

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import instructorsData from '@/app/store/instructorsData';
import {RootState, setInstructors} from "@/app/store/store";

const MoreInfo: FC = () => {
  const [activeTab, setActiveTab] = useState('instructors');
  const dispatch = useDispatch();

  const instructors = useSelector((state: RootState) => state.instructors.instructors);

  useEffect(() => {
    dispatch(setInstructors(instructorsData));
  }, [dispatch]);

  const renderContent = () => {
    switch (activeTab) {
      case 'instructors':
        return (
          <div>
            <h2 className="font-semibold mb-4">{instructors.length} Instructors</h2>
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="mb-4 p-4 border border-gray-300 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={instructor.avatar}
                    alt={instructor.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-md font-semibold">{instructor.name}</p>
                    <div className="flex items-center text-sm text-customGray">
                      <span>{instructor.school}</span>
                      <span className="mx-2">|</span>
                      <span>{instructor.position}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-customGray">{instructor.bio}</p>
              </div>
            ))}
          </div>
        );
      case 'courseInfo':
        return <div>Course Information</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-3/4 p-4 m-2 border border-gray-300 rounded text-customGray">
      <div className="flex mb-4 border-b border-gray-300 pb-2">
        <button
          className={`relative mr-4 pb-2 ${activeTab === 'instructors' ? 'font-bold text-customGray' : ''}`}
          onClick={() => setActiveTab('instructors')}
        >
          Instructors
          {activeTab === 'instructors' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-customBlue rounded-full" />
          )}
        </button>
        <button
          className={`relative mr-4 pb-2 ${activeTab === 'courseInfo' ? 'font-bold text-customGray' : ''}`}
          onClick={() => setActiveTab('courseInfo')}
        >
          Course Information
          {activeTab === 'courseInfo' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-customBlue rounded-full" />
          )}
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default MoreInfo;
