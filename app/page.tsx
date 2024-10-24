'use client'

import Layout from "@/app/components/Layout/Layout";
import Sidebar from "@/app/pages/Workspace/SideBar/SideBar";
import Cohort from "@/app/pages/Workspace/Cohort/Cohort";
import { useState } from 'react';
import Instructor from "@/app/pages/Workspace/Instructor/Instructor";

export default function Page() {
  const [activeOption, setActiveOption] = useState('cohorts');

  const handleOptionChange = (option: string) => {
    setActiveOption(option);
  };

  return (
    <Layout>
      <div className="flex">
        <Sidebar onOptionChange={handleOptionChange} />
        <div className="p-8 flex-grow">
          {activeOption === 'cohorts' ? (
            <Cohort />
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
