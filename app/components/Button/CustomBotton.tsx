import { FC } from 'react';

interface CustomButtonProps {
  color: string;
  text: string;
  onClick: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ color, text, onClick }) => {
  return (
    <button className={`px-4 py-2 rounded ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
