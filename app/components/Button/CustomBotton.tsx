import { FC, ReactNode } from 'react';

interface CustomButtonProps {
  color: string;
  text: string;
  onClick?: () => void;
  outline?: boolean;
  icon?: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ color, text, onClick, outline = false, icon }) => {
  const buttonClass = outline
    ? `px-4 py-2 rounded border-2 border-${color} text-${color} bg-transparent font-semibold flex items-center justify-between`
    : `px-4 py-2 rounded ${color} text-white font-semibold flex items-center justify-between`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default CustomButton;
