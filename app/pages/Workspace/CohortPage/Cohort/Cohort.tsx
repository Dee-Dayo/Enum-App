'use client';

import { useState, FC, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomButton from "@/app/components/Button/CustomBotton";
import Image from 'next/image';
import CreateCohortModal from "@/app/components/CreateCohortModal/CreateCohortModal";
import type { RootState, Cohort } from "@/app/store/store";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import CohortDetails from "@/app/pages/Workspace/CohortPage/Details/CohortDetails";

const Cohort: FC<{ onCohortSelect: (cohort: Cohort) => void }> = ({ onCohortSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCohort, setSelectedCohort] = useState<Cohort | null>(null); // Specify type for selectedCohort
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const cohorts = useSelector((state: RootState) => state.cohorts.cohorts);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCohortClick = (cohort: Cohort) => {
    setSelectedCohort(cohort);
    onCohortSelect(cohort);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {selectedCohort ? (
        <CohortDetails cohort={selectedCohort} onBack={() => setSelectedCohort(null)} />
      ) : (
        <>
          <h2 className="text-2xl font-ibm-plex-serif font-semibold m-2 text-customGray">Cohorts</h2>
          <div className="flex flex-col items-center justify-center w-full">
            {cohorts.length === 0 ? (
              <>
                <Image src="/empty.png" alt="Empty State" width={170.85} height={143.55} className="mb-4" />
                <h2 className="text-2xl font-semibold mb-2 text-customGray">Empty Space</h2>
                <p className="text-customGray mb-4">No cohort has been created yet. Lets get you started by clicking the button below.</p>
                <CustomButton color="bg-customBlue text-white" text="Create a Cohort" onClick={openModal} />
              </>
            ) : (
              <div className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="hidden md:flex items-center border-2 rounded px-2 py-1 w-1/4">
                    <Image src="/search.png" alt="Search Icon" width={20} height={20} />
                    <input type="text" placeholder="Search" className="px-2 py-1 w-full outline-none" />
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <CustomButton color="bg-blue-500" text="Create a cohort" onClick={openModal} />
                    <CustomButton
                      color="customBlue"
                      text="More Actions"
                      outline
                      onClick={toggleDropdown}
                      icon={<MoreVertIcon sx={{ fontSize: 24, color: '#475661' }} />}
                    />
                  </div>
                </div>

                {isDropdownOpen && (
                  <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <ul>
                      <li className="px-4 py-2 hover:customLightBlue cursor-pointer">Publish a poll</li>
                      <li className="px-4 py-2 hover:customLightBlue cursor-pointer">Schedule an event</li>
                      <li className="px-4 py-2 hover:customLightBlue cursor-pointer">Make an announcement</li>
                    </ul>
                  </div>
                )}

                <div className="flex flex-col">
                  {cohorts.map((cohort, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border p-4 mb-2 rounded-lg cursor-pointer"
                      onClick={() => handleCohortClick(cohort)}
                    >
                      <div className="flex-shrink-0">
                        {cohort.avatar ? (
                          <Image
                            src={cohort.avatar}
                            alt={`${cohort.cohortName} Avatar`}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                            style={{ borderRadius: '8px' }}
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-200" />
                        )}
                      </div>

                      <div className="flex flex-col ml-4 flex-grow">
                        <h3 className="font-bold text-lg text-customGray">{cohort.cohortName}</h3>
                        <div className="flex">
                          <p className="text-sm text-gray-500 mr-6 hidden md:block">{cohort.program}</p>
                          <Image src="/user.png" alt="Programs Icon" width={20} height={20} />
                          <p className="text-sm text-customGray">25 learners</p>
                        </div>
                      </div>

                      {/* Show dropdown icon */}
                      <div className="flex items-center">
                        <IconButton>
                          <MoreVertIcon sx={{ fontSize: 24, color: '#475661' }} />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <CreateCohortModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Cohort;
