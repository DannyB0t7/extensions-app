import React, { useContext } from "react";
import "./ExtensionList.css";
import Chips from "./Chips";
import ExtensionCard from "./ExtensionCard";
import { ExtensionCtx } from "../store/ExtensionListContext";

function ExtensionList() {
  const { extensions, filterChips } = useContext(ExtensionCtx);

  let filteredExtensions;

  if (filterChips === "All") {
    filteredExtensions = extensions;
  } else if (filterChips === "Inactive") {
    filteredExtensions = extensions.filter(
      (extension) => extension.isActive === false
    );
  } else if (filterChips === "Active") {
    filteredExtensions = extensions.filter(
      (extension) => extension.isActive === true
    );
  }

  return (
    <div className="mt-[3rem]">
      <div className="flex justify-between items-center gap-x-[2rem] gap-y-[1rem] flex-wrap">
        <h1 className="text-3xl font-bold">Extension List</h1>
        <div className="flex gap-[10px] items-center">
          <Chips status="All" />
          <Chips status="Active" />
          <Chips status="Inactive" />
        </div>
      </div>

      <div className="grid-container">
        {filteredExtensions.length > 0 &&
          filteredExtensions.map((extension) => (
            <ExtensionCard extension={extension} key={extension.name} />
          ))}
        {filteredExtensions.length === 0 && <p>Nothing to display...</p>}
      </div>
    </div>
  );
}

export default ExtensionList;
