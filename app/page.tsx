'use client';

import Layout from "@/app/components/Layout/Layout";
import Sidebar from "@/app/pages/Workspace/SideBar/SideBar";
import Cohort from "@/app/pages/Workspace/CohortPage/Cohort/Cohort";
import { useState } from 'react';
import Instructor from "@/app/pages/Workspace/Instructor/Instructor";
import CohortDetails from "@/app/pages/Workspace/CohortPage/Details/CohortDetails";
import { Cohort as CohortType } from "@/app/store/store"; // Import Cohort interface

export default function Page() {
  const [activeOption, setActiveOption] = useState('cohorts');
  const [selectedCohort, setSelectedCohort] = useState<CohortType | null>(null); // Specify type for selectedCohort

  const handleOptionChange = (option: string) => {
    setActiveOption(option);
  };

  const handleCohortSelect = (cohort: CohortType) => { // Specify type for cohort
    setSelectedCohort(cohort);
    setActiveOption('cohorts');
  };

  const handleBackToCohorts = () => {
    setSelectedCohort(null);
  };

  return (
    <Layout>
      <div className="flex">
        <div className="hidden md:block">
          {!selectedCohort && <Sidebar onOptionChange={handleOptionChange} />}
        </div>

        <div className="p-8 flex-grow">
          {selectedCohort ? (
            <CohortDetails cohort={selectedCohort} onBack={handleBackToCohorts} />
          ) : activeOption === 'cohorts' ? (
            <Cohort onCohortSelect={handleCohortSelect} />
          ) : activeOption === 'instructors' ? (
            <Instructor />
          ) : (
            <div className="text-center text-gray-600">Select an option from the sidebar.</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
