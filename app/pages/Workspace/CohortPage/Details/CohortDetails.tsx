import React, {FC} from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from "next/image";
import CustomButton from "@/app/components/Button/CustomBotton";
import CohortDetailsSidebar from "@/app/pages/Workspace/CohortPage/Sidebar/CohortDetailsSidebar";
import MoreInfo from "@/app/pages/Workspace/CohortPage/Info/MoreInfo";
import {CohortDetailsProps} from "@/app/store/store";

const CohortDetails: FC<CohortDetailsProps> = ({ cohort, onBack }) => {
  return (
      <div className="p-2">
          <button onClick={onBack} className="flex items-center text-customGray">
              <ArrowBackIcon className="mr-2"/>
              Back
          </button>

          <div className="flex items-center mb-6 mt-6">
              {cohort.avatar ? (
                  <Image
                      src={cohort.avatar}
                      alt={`${cohort.cohortName} Avatar`}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      style={{borderRadius: '8px'}}
                  />
              ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"/>
              )}
              <div className="flex flex-col ml-4 flex-grow">
                  <h3 className="font-bold text-lg text-customGray">{cohort.cohortName}</h3>
                  <div className="flex">
                      <p className="text-sm text-customBlue font-semibold mr-6">{cohort.program}</p>
                  </div>
              </div>

              <div className="flex space-x-2 justify-end relative">
                  <CustomButton color="bg-blue-500" text="Add Learners"/>
                  <CustomButton
                      color="customBlue"
                      text="More Actions"
                      outline
                      icon={<MoreVertIcon sx={{fontSize: 24, color: '#475661'}}/>}
                  />
              </div>
          </div>

          <div className="flex">
              <CohortDetailsSidebar/>
              <MoreInfo/>
          </div>
      </div>
  );
};

export default CohortDetails;
