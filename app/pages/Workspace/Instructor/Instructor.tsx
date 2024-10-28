import { useSelector, useDispatch } from "react-redux";
import { RootState, setFacilitators } from "@/app/store/store";
import Image from "next/image";
import CustomButton from "@/app/components/Button/CustomBotton";
import { FC, useEffect } from "react";
import facilitatorsData from "@/app/store/facilitatorData";

const Instructor: FC = () => {
  const dispatch = useDispatch();
  const facilitators = useSelector((state: RootState) => state.facilitators.facilitators);

  useEffect(() => {
    dispatch(setFacilitators(facilitatorsData));
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        {facilitators.length === 0 ? (
          <>
            <Image src="/empty.png" alt="Empty State" width={170.85} height={143.55} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-customGray">Empty Space</h2>
            <p className="text-customGray mb-4">No facilitator has been invited, let's get you started by clicking the button below</p>
            <CustomButton color="bg-customBlue text-white" text="Invite Facilitators" />
          </>
        ) : (
          <div className="w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h2 className="text-2xl font-ibm-plex-serif font-semibold m-2 text-customGray">Instructors</h2>
                <p className="pl-2">You have a total of {facilitators.length} instructors</p>
              </div>
              <div className="flex items-center border-2 rounded px-2 py-1">
                <Image src="/search.png" alt="Search Icon" width={20} height={20} />
                <input type="text" placeholder="Search for a facilitator" className="px-2 py-1 w-full outline-none" />
              </div>
              <div className="flex space-x-2 justify-end relative">
                <CustomButton color="bg-customBlue" text="Invite Facilitator" />
              </div>
            </div>
              <div className="flex justify-between">
                  <span>INSTRUCTOR</span>
                  <h2>ORGANIZATION</h2>
                  <h2>COURSE</h2>
                  <h2>STATUS</h2>
                  <h2>DATE ADDED</h2>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {facilitators.map((facilitator) => (
                <div key={facilitator.id} className="flex flex-col items-center p-4 border rounded shadow">
                  <Image src={facilitator.avatar} alt={facilitator.fullName} width={100} height={100} className="rounded-full mb-2" />
                  <h3 className="text-lg font-semibold">{facilitator.fullName}</h3>
                  <p className="text-sm text-customGray">{facilitator.organization}</p>
                  <p className="text-sm text-customGray">{facilitator.course}</p>
                  <p className="text-sm text-customGray">{facilitator.status}</p>
                  <p className="text-sm text-customGray">{facilitator.dateAdded}</p>
                  <CustomButton color="bg-blue-500 text-white mt-2" text="View Profile" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructor;
