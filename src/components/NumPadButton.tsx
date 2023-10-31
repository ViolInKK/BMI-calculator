import { typeStyles } from "../constants";

interface NumPadButtonProps {
  name: string;
  type: string;
  isWide: boolean;
}

const NumPadButton = ({ name, type, isWide }: NumPadButtonProps) => {
  const themeNumber = 1;

  return (
    <div className={`flex justify-center items-center ${typeStyles[themeNumber][type]} rounded border-b-4 ${isWide ? "col-span-2" : null}`}>
      {name}
    </div>
  );
};

export default NumPadButton;
