import { useAppDispatch } from "../redux/hooks";
import { switchTheme } from "../redux/calculatorSlice";

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(switchTheme("default"))}>default|</button>
      <button onClick={() => dispatch(switchTheme("light"))}>light|</button>
      <button onClick={() => dispatch(switchTheme("dark_neon"))}>dark neon|</button>
    </div>
  );
};

export default ThemeSwitch;
