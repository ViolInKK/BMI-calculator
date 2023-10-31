import { NumPadButton } from ".";
import { buttons } from "../constants";

const NumPad = () => {
  return (
    <div className="min-w-[536px] min-h-[435px] bg-buttonsContainerBg_1 grid grid-rows-5 grid-cols-4 grid-flow-col gap-3 col-span-2 p-4 rounded ">
      {buttons.map((button) => (
        <NumPadButton type={button.type} name={button.name} isWide={button.isWide} />
      ))}
    </div>
  );
};

export default NumPad;
