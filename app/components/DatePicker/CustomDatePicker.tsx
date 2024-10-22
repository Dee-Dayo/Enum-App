import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const CustomDatePicker: FC<{ label: string }> = ({ label }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="mb-4">
      <label className="block text-customGray text-sm">{label}</label>
      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          placeholderText="23 Dec 2021"
          dateFormat="dd MMM yyyy"
          className="w-full p-2 border rounded text-sm"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5 text-customGray" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 2V3h6v1H7z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CustomDatePicker;
