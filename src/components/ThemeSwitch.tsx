import { useAppDispatch } from "../redux/hooks";
import { switchTheme } from "../redux/calculatorSlice";
import { useEffect, useState } from "react";

interface ThemeSwitchProps {
  themes: string[];
  amountOfThemes: number;
}

const ThemeSwitch = ({ themes, amountOfThemes }: ThemeSwitchProps) => {
  const dispatch = useAppDispatch();
  const [sliderPosition, setSliderPosition] = useState(0);
  // if set more than 1.5rem slider will go outside the container
  const maxPosition = 1.5;

  const handleClick = () => {
    setSliderPosition((prev) => (prev + 1) % amountOfThemes);
  };

  useEffect(() => {
    dispatch(switchTheme(themes[sliderPosition]));
  }, [sliderPosition]);

  return (
    <div
      className="w-[80px] h-[30px] flex items-center justify-start rounded-lg bg-buttonsContainerBg cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="w-[20px] h-[20px] bg-slider rounded-full relative mx-1 transition-all delay-50"
        style={{ left: `${(maxPosition / (amountOfThemes - 1)) * sliderPosition}rem` }}
      ></div>
    </div>
  );
};

export default ThemeSwitch;
