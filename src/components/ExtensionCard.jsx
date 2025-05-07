import React, { useContext } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ExtensionCtx } from "../store/ExtensionListContext";

function ExtensionCard({ extension }) {
  const { removeExtension } = useContext(ExtensionCtx);
  return (
    <div className="p-[1rem] bg-Neutral-800 rounded-2xl border-[.5px] border-Neutral-600 flex flex-col justify-between gap-[2rem]">
      <div className="flex gap-[15px] items-start">
        <img src={extension.logo} alt="logo" />
        <div>
          <h1 className="text-lg font-bold">{extension.name}</h1>
          <p className="text-Neutral-300 text-sm mt-1">
            {extension.description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          className="text-Neutral-300 px-[15px] py-[5px] border-[.5px] border-Neutral-600 rounded-full text-sm hover:bg-Red-500 hover:text-black hover:cursor-pointer focus:bg-Red-500 focus:text-black"
          onClick={() => removeExtension(extension.name)}
        >
          Remove
        </button>
        <ToggleSwitch isActive={extension.isActive} name={extension.name} />
      </div>
    </div>
  );
}

export default ExtensionCard;
