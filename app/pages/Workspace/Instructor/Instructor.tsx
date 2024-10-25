import {useSelector} from "react-redux";
import {RootState} from "@/app/store/store";
import Image from "next/image";
import CustomButton from "@/app/components/Button/CustomBotton";
import {FC} from "react";

const Instructor: FC = () => {


  const instructors = useSelector((state: RootState) => state.instructors.instructors);

  return (
    <div>
      <h2 className="text-2xl font-ibm-plex-serif font-semibold m-2 text-customGray">Instructors</h2>
      <p>You have a total of 30 instructors</p>
      <div className="flex flex-col items-center justify-center w-full">
        {instructors.length === 0 ? (
          <>
            <Image src="/empty.png" alt="Empty State" width={170.85} height={143.55} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-customGray">Empty Space</h2>
            <p className="text-customGray mb-4">No instructor has been invited, lets get you started by clicking the button below</p>
            <CustomButton color="bg-customBlue text-white" text="Invite Instructors"/>
          </>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between p-4 border-b w-full">
              <div className="flex items-center border-2 rounded px-2 py-1 w-1/4">
                <Image src="/search.png" alt="Search Icon" width={20} height={20} />
                <input type="text" placeholder="Search for an instructor" className="px-2 py-1 w-full outline-none" />
              </div>

              <div className="flex space-x-2 justify-end relative">
                <CustomButton color="bg-blue-500" text="Invite Instructor"/>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Instructor;

