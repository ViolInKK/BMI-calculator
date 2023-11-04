import { typeStyles } from "../constants";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { inputDigit, inputAction, inputErase, inputEqual } from "../redux/calculatorSlice";

interface NumPadButtonProps {
  name: string;
  type: string;
  isWide: boolean;
}

const NumPadButton = ({ name, type, isWide }: NumPadButtonProps) => {
  const theme = useAppSelector((state) => state.calculator.styleTheme);

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
      className={`flex justify-center items-center ${typeStyles[theme][type]} rounded border-b-4 ${
        isWide ? "col-span-2" : null
      } select-none`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default NumPadButton;
