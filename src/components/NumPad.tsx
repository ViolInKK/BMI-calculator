import { NumPadButton } from ".";
import { buttons } from "../constants";

const NumPad = () => {
  return (
    <div className="min-w-[536px] min-h-[435px] bg-buttonsContainerBg grid grid-rows-5 grid-cols-4 grid-flow-col gap-3 col-span-2 p-4 rounded ">
      {buttons.map((button, index) => (
        <NumPadButton type={button.type} name={button.name} isWide={button.isWide} key={index} />
      ))}
    </div>
  );
};

export default NumPad;
