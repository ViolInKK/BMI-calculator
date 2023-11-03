import { typeStyles } from "../constants";
import { useAppDispatch } from "../redux/hooks";
import { inputDigit } from "../redux/calculatorSlice";

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
        console.log("1 input");
        dispatch(inputDigit(+name));
        break;
      case "action":
        console.log("2 action");
        break;
      case "erase":
        console.log("3 erase");
        break;
      case "equal":
        console.log("4 equal");
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
