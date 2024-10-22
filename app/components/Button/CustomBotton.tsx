import { FC } from 'react';

interface CustomButtonProps {
  color: string;
  text: string;
  onClick: () => void;
  outline?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({ color, text, onClick, outline = false }) => {
  const buttonClass = outline
    ? `px-4 py-2 rounded border-2 border-${color} text-${color} bg-transparent font-semibold`
    : `px-4 py-2 rounded ${color} text-white font-semibold`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
