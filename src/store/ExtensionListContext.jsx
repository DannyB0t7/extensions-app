import { createContext, useState } from "react";
import { extensionList } from "../../data";

export const ExtensionCtx = createContext({
  extensions: [],
  filterChips: "",
  chipsHandler: (status) => {},
  toggleIsActive: (name) => {},
  removeExtension: (name) => {},
});

function ExtensionListContext({ children }) {
  const [extensions, setExtensions] = useState(extensionList);
  const [filterChips, setFilterChips] = useState("All");

  const toggleIsActive = (name) => {
    const exsistingExtensionIdx = extensions.findIndex(
      (extension) => extension.name === name
    );
    const exsistingExtension = extensions[exsistingExtensionIdx];
    let updatedExtension = [...extensions];
    updatedExtension[exsistingExtensionIdx] = {
      ...exsistingExtension,
      isActive: exsistingExtension.isActive ? false : true,
    };

    setExtensions(updatedExtension);
  };

  const removeExtension = (name) => {
    const exsistingExtensionIdx = extensions.findIndex(
      (extension) => extension.name === name
    );
    console.log(exsistingExtensionIdx);
    let updatedExtension = [...extensions];
    updatedExtension.splice(exsistingExtensionIdx, 1);

    setExtensions(updatedExtension);
  };

  const chipsHandler = (status) => {
    setFilterChips(status);
  };

  const extensionCtx = {
    extensions,
    filterChips,
    chipsHandler,
    toggleIsActive,
    removeExtension,
  };

  return (
    <ExtensionCtx.Provider value={extensionCtx}>
      {children}
    </ExtensionCtx.Provider>
  );
}

export default ExtensionListContext;
