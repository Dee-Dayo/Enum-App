import { FC } from 'react';
import CustomButton from "@/app/components/Button/CustomBotton";
import Image from 'next/image';

const Cohort: FC = () => {
  return (
      <div>
          <h2 className="text-2xl font-semibold m-2 text-customGray">Cohorts</h2>
          <div className="flex flex-col items-center justify-center">
              <Image src="/empty.png" alt="Empty State" width={130} height={130} className="mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-customGray">Empty Space</h2>
              <p className="text-customGray mb-4">No cohort has been created yet. Let's get you started by clicking the
                  button below.</p>
              <CustomButton color="bg-customBlue text-white" text="Create a Cohort"/>
          </div>
      </div>
  );
};

export default Cohort;
