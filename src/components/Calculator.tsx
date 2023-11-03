import { IOdisplay, NumPad } from ".";

const Calculator = () => {
  return (
    <div className="flex flex-col gap-3">
      Calculator
      <IOdisplay />
      <NumPad />
    </div>
  );
};

export default Calculator;
