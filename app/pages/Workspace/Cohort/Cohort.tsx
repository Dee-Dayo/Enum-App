'use client'

import {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import CustomButton from "@/app/components/Button/CustomBotton";
import Image from 'next/image';
import CreateCohortModal from "@/app/components/CreateCohortModal/CreateCohortModal";
import {RootState} from "@/app/store/store";

const Cohort: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cohorts = useSelector((state: RootState) => state.cohorts.cohorts);

  return (
    <div>
      <h2 className="text-2xl font-ibm-plex-serif font-semibold m-2 text-customGray">Cohorts</h2>
      <div className="flex flex-col items-center justify-center">
        {cohorts.length === 0 ? (
          <>
            <Image src="/empty.png" alt="Empty State" width={170.85} height={143.55} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-customGray">Empty Space</h2>
            <p className="text-customGray mb-4">No cohort has been created yet. Lets get you started by clicking the button below.</p>
            <CustomButton color="bg-customBlue text-white" text="Create a Cohort" onClick={openModal} />
          </>
        ) : (
          <div>
            {cohorts.map((cohort, index) => (
              <div key={index} className="border p-4 mb-2 rounded-lg">
                <h3 className="font-bold">{cohort.cohortName}</h3>
                <p>{cohort.description}</p>
                <p>Program: {cohort.program}</p>
                <p>Start Date: {cohort.startDate?.toLocaleDateString()}</p>
                <p>End Date: {cohort.endDate?.toLocaleDateString()}</p>
                <p>Avatar: {cohort.selectedFileName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <CreateCohortModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Cohort;
