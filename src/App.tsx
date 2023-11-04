import { Calculator } from "./components";
import { useAppSelector } from "./redux/hooks";

function App() {
  const theme = useAppSelector((state) => state.calculator.styleTheme);

  return (
    <div className={`${theme} transition delay-50 w-screen h-screen flex justify-center items-center bg-pageBg`}>
      <Calculator />
    </div>
  );
}

export default App;
