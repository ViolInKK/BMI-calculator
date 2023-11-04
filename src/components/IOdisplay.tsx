import { useAppSelector } from "../redux/hooks";

const IOdisplay = () => {
  const { mainValue, bufferValue, isBuffer } = useAppSelector((state) => state.calculator);

  return (
    <div className="max-w-[536px] min-h-[120px] flex flex-row-reverse bg-IOdisplayBg_1 rounded text-3xl px-3 py-3 overflow-hidden">
      {isBuffer ? bufferValue : mainValue}
    </div>
  );
};

export default IOdisplay;
