import { FC } from 'react';

interface CustomButtonProps {
  color: string;
  text: string;
}

const CustomButton: FC<CustomButtonProps> = ({ color, text }) => {
  return (
    <button className={`px-4 py-2 rounded ${color}`}>
      {text}
    </button>
  );
};

export default CustomButton;
