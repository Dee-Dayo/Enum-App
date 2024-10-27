'use client'

import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import instructorsData from '@/app/store/instructorsData';
import { RootState, setInstructors, setModules } from "@/app/store/store";
import modulesData from "@/app/store/modulesData";
import { Add, Remove, AccessTime } from '@mui/icons-material';

const MoreInfo: FC = () => {
  const [activeTab, setActiveTab] = useState('instructors');
  const [activeModuleId, setActiveModuleId] = useState('module1');
  const [showSessions, setShowSessions] = useState(false);

  const dispatch = useDispatch();
  const instructors = useSelector((state: RootState) => state.instructors.instructors);
  const modules = useSelector((state: RootState) => state.modules.modules);

  useEffect(() => {
    dispatch(setInstructors(instructorsData));
    dispatch(setModules(modulesData));
  }, [dispatch]);

  const handleModuleClick = (moduleId: string) => {
    setActiveModuleId(moduleId);
    setShowSessions(false); // Reset session view when switching modules
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'instructors':
        return (
          <div>
            <h2 className="font-semibold mb-4 text-lg md:text-xl">{instructors.length} Instructors</h2>
            {instructors.map((instructor) => (
              <div key={instructor.id} className="mb-4 p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center mb-2">
                  <Image src={instructor.avatar} alt={instructor.name} width={50} height={50} className="rounded-full" />
                  <div className="ml-4">
                    <p className="text-md font-semibold">{instructor.name}</p>
                    <div className="flex items-center text-sm text-customGray">
                      <span>{instructor.school}</span>
                      <span className="mx-2 hidden sm:inline">|</span>
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
        return (
          <div>
            <h2 className="font-semibold mb-4 text-lg md:text-xl">Course Overview</h2>
            <p className="text-sm md:text-base">This course examines important issues in corporate finance from the perspectives of financial managers who make financial investment decisions and financing decisions. This course incorporates an element of financial modelling in teaching and assessments.</p>
            <h3 className="font-semibold mt-6 mb-2 text-lg md:text-xl">Learning Outcomes</h3>
            <ul className="list-disc list-inside mt-2 text-sm md:text-base">
              <li>Understand various forms of market imperfections and their implications for financial managers.</li>
              <li>Generate a valuation range for a project or a company.</li>
              <li>Apply option theories to solve corporate finance problems.</li>
              <li>Use Excel to conduct a simple DCF analysis, regression analysis, and sensitivity analysis.</li>
            </ul>
          </div>
        );
      case 'modules':
        return (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300">
              {modules.map((module) => (
                <div
                  key={module.moduleId}
                  className={`mb-4 p-2 cursor-pointer ${activeModuleId === module.moduleId ? 'font-bold text-customBlue' : ''}`}
                  onClick={() => handleModuleClick(module.moduleId)}
                >
                  {module.title}
                </div>
              ))}
            </div>

            <div className="md:w-3/4 p-4">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowSessions(!showSessions)}>
                <h3 className="font-semibold text-customBlue">Sessions</h3>
                <button>
                  {showSessions ? <Remove fontSize="small"/> : <Add fontSize="small" />}
                </button>
              </div>

              {showSessions && (
                <div className="ml-4 mt-2">
                  {modules.find(module => module.moduleId === activeModuleId)?.sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between text-sm md:text-md mb-4 border-b border-gray-300">
                      <span>{session.title}</span>
                      <div className="flex items-center">
                        <AccessTime fontSize="small" className="mr-1 text-gray-500" />
                        <span className="text-xs md:text-sm text-gray-500">{session.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-3/4 p-2 md:p-4 m-2 border border-gray-300 rounded text-customGray">
      <div className="flex overflow-x-auto mb-4 border-b border-gray-300 pb-2">
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
        <button
          className={`relative mr-4 pb-2 ${activeTab === 'modules' ? 'font-bold text-customGray' : ''}`}
          onClick={() => setActiveTab('modules')}
        >
          Modules
          {activeTab === 'modules' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-customBlue rounded-full" />
          )}
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default MoreInfo;
