import { typeStyles } from "../constants";
import { useAppDispatch } from "../redux/hooks";
import { inputDigit, inputAction, inputErase, inputEqual } from "../redux/calculatorSlice";

interface NumPadButtonProps {
  name: string;
  type: string;
  isWide: boolean;
}

const NumPadButton = ({ name, type, isWide }: NumPadButtonProps) => {
  const themeNumber = 1;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    switch (type) {
      case "input":
        dispatch(inputDigit(name));
        break;
      case "action":
        dispatch(inputAction(name));
        break;
      case "erase":
        dispatch(inputErase(name));
        break;
      case "equal":
        dispatch(inputEqual());
        break;
    }
  };

  return (
    <div
      className={`flex justify-center items-center ${typeStyles[themeNumber][type]} rounded border-b-4 ${isWide ? "col-span-2" : null}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default NumPadButton;
