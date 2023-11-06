import { useAppSelector } from "../redux/hooks";

const IOdisplay = () => {
  const { mainValue, bufferValue, isBuffer } = useAppSelector((state) => state.calculator);

  return (
    <div className="max-w-[536px] min-h-[120px] flex flex-row-reverse bg-IOdisplayBg rounded text-3xl px-3 py-3 overflow-hidden text-textIOdisplay">
      {isBuffer ? bufferValue : mainValue}
    </div>
  );
};

export default IOdisplay;
