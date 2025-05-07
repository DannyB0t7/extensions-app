import React, { useContext } from "react";
import { ExtensionCtx } from "../store/ExtensionListContext";

function Chips({ status }) {
  const { chipsHandler } = useContext(ExtensionCtx);
  return (
    <button
      className="px-[15px] py-[6px] bg-Neutral-700 hover:bg-Neutral-800 hover:cursor-pointer rounded-full border-[.5px] border-Neutral-600 text-sm focus:bg-Red-500 focus:text-black"
      onClick={() => chipsHandler(status)}
    >
      {status}
    </button>
  );
}

export default Chips;
