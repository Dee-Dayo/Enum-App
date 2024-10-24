import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';

interface CustomDatePickerProps {
  label: string;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ label, onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const today = new Date();

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="mb-4">
      <label className="block text-customGray text-sm">{label}</label>
      <div className="relative">
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          placeholderText="23 Dec 2021"
          dateFormat="dd MMM yyyy"
          className="w-full p-2 border rounded text-sm outline-none focus:ring-2 focus:ring-customBlue focus:border-customBlue"
          minDate={today}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Image
            src="/calendar.png"
            alt="Calendar Icon"
            width={18}
            height={18}
            className="text-customGray"
          />
        </span>
      </div>
    </div>
  );
};

export default CustomDatePicker;
