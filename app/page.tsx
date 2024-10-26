'use client'

import Layout from "@/app/components/Layout/Layout";
import Sidebar from "@/app/pages/Workspace/SideBar/SideBar";
import Cohort from "@/app/pages/Workspace/Cohort/Cohort";
import { useState } from 'react';
import Instructor from "@/app/pages/Workspace/Instructor/Instructor";
import CohortDetails from "@/app/pages/Workspace/CohortDetails/CohortDetails";

export default function Page() {
  const [activeOption, setActiveOption] = useState('cohorts');
  const [selectedCohort, setSelectedCohort] = useState(null);

  const handleOptionChange = (option: string) => {
    setActiveOption(option);
  };

  const handleCohortSelect = (cohort) => {
    setSelectedCohort(cohort);
    setActiveOption('cohorts');
  };

  const handleBackToCohorts = () => {
    setSelectedCohort(null);
  };

  return (
    <Layout>
      <div className="flex">
        {!selectedCohort && <Sidebar onOptionChange={handleOptionChange} />}

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
