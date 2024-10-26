'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import coursesData from "@/app/store/courseData";
import { RootState, setCourses } from "@/app/store/store";

const CohortDetailsSideBar: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCourses(coursesData));
  }, [dispatch]);

  const courses = useSelector((state: RootState) => state.courses.courses);

  return (
    <div className="w-1/4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded text-customGray placeholder-customGray focus:outline-none focus:ring-2 focus:ring-customBlue"
        />
      </div>
      <div className="p-4 border border-gray-300 rounded text-customGray">
        <h2 className="font-semibold mb-2">{courses.length} Courses</h2>
        <div className="flex flex-col m-2 mt-4">
          {courses.map((course) => (
            <div key={course.id} className="mb-4 flex items-center">
              <Image src={course.avatar} alt={course.courseName} width={50} height={50} />
              <div className="ml-2">
                <span className="block font-semibold">{course.courseName}</span>
                <span className="block text-sm">{course.noOfModule} modules</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CohortDetailsSideBar;
