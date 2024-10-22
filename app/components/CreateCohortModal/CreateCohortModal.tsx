'use client'

import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import CustomButton from "@/app/components/Button/CustomBotton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-customBlue_dark bg-opacity-80">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-1/2 max-h-screen overflow-y-auto relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <CloseIcon className="text-gray-500" />
        </button>
        <h2 className="text-1xl font-semibold mb-4 text-customGray">Create a Cohort</h2>
        <form>
          <div className="mb-4">
            <label className="block text-customGray text-sm">Cohort Name</label>
            <input type="text" className="w-full p-2 border rounded text-sm" placeholder="Ex. Cohort 1"/>
          </div>

          <div className="mb-4">
            <label className="block text-customGray text-sm">Description</label>
            <textarea className="w-full p-2 border rounded text-sm"
                      placeholder="Ex. A space for Python developers"></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-customGray text-sm">Program</label>
            <select className="w-full p-2 border rounded text-sm">
              <option value="" disabled selected></option>
            </select>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">From Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">To Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
          </div>
          {/*<div className="mb-4">*/}
          {/*  <label className="block text-gray-700">Add or select users</label>*/}
          {/*  <input type="text" className="w-full p-2 border rounded" placeholder="Type names or emails" />*/}
          {/*</div>*/}
          {/*<div className="mb-4">*/}
          {/*  <label className="block text-gray-700">Add a cohort avatar</label>*/}
          {/*  <div className="flex items-center justify-center border-dashed border-2 border-gray-300 rounded p-4">*/}
          {/*    <Image src="/path/to/avatar-placeholder.png" alt="Avatar Placeholder" width={50} height={50} />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="flex justify-end space-x-2">
            <CustomButton color="bg-gray-500 text-white" text="Cancel" onClick={onClose}/>
            <CustomButton color="bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white" text="Create Cohort"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCohortModal;
