import { IOdisplay, NumPad, ThemeSwitch } from ".";

const Calculator = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        calc|
        <ThemeSwitch />
      </div>
      <IOdisplay />
      <NumPad />
    </div>
  );
};

export default Calculator;
