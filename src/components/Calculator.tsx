import { IOdisplay, NumPad, ThemeSwitch } from ".";

const Calculator = () => {
  const themes = ["default", "light", "dark_neon"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full justify-between items-center">
        <span className="text-textTitle">calc</span>
        <ThemeSwitch themes={themes} amountOfThemes={themes.length} />
      </div>
      <IOdisplay />
      <NumPad />
    </div>
  );
};

export default Calculator;
